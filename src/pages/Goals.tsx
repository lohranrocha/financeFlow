import React from 'react';
import { Plus, Target, TrendingUp } from 'lucide-react';
import { Goal } from '../types';

const Goals: React.FC = () => {
  const goals: Goal[] = [
    {
      id: '1',
      name: 'Emergency Fund',
      targetAmount: 10000,
      currentAmount: 8000,
      deadline: '2024-12-31',
    },
    {
      id: '2',
      name: 'New Car',
      targetAmount: 15000,
      currentAmount: 5000,
      deadline: '2025-06-30',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
          <Plus className="w-5 h-5" />
          Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          return (
            <div key={goal.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{goal.name}</h3>
                    <p className="text-sm text-gray-500">Target: ${goal.targetAmount}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  Due {new Date(goal.deadline).toLocaleDateString()}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{progress.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-600">Current: ${goal.currentAmount}</span>
                  <span className="text-gray-600">Target: ${goal.targetAmount}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <button className="w-full py-2 px-4 bg-gray-50 text-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  Add Progress
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;