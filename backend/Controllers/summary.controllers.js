import Expenses from '../Models/expenses.models.js';
// Helper function to calculate date range summary
const calculateSummary = async (userId, start, end, includeByCategory = false) => {
    const expenses = await Expenses.find({
        user: userId,
        date: { $gte: start, $lte: end }
    });
    
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const summary = {
        total: totalExpenses,
        count: expenses.length,
        expenses: expenses
    };
    
    if (includeByCategory) {
        const byCategory = {};
        expenses.forEach((e) => {
            byCategory[e.category] = (byCategory[e.category] || 0) + e.amount;
        });
        summary.byCategory = byCategory;
    }
    
    return summary;
};

export const getDailySummary = async (req, res, next) => {
    try {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        
        const data = await calculateSummary(req.user._id, start, end);
        res.status(200).json({ success: true, data });    
    } catch (error) {
        next(error);    
    }
}

export const getWeeklySummary = async (req, res, next) => {
    try {
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        const start = new Date();
        start.setDate(start.getDate() - 6);
        start.setHours(0, 0, 0, 0);
        
        const data = await calculateSummary(req.user._id, start, end);
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
}

export const getMonthlySummary = async (req, res, next) => {
    try {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth(), 1);
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        end.setHours(23, 59, 59, 999);
        
        const data = await calculateSummary(req.user._id, start, end, true);
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
}