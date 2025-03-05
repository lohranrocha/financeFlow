import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, DivideIcon as LucideIcon } from 'lucide-react';

interface Insight {
  id: string;
  type: 'success' | 'warning' | 'tip';
  title: string;
  description: string;
  icon: typeof LucideIcon;
}

interface StyleConfig {
  bg: string;
  icon: string;
  border: string;
}

const Insights: React.FC = () => {
  const insights: Insight[] = [
    {
      id: '1',
      type: 'success',
      title: 'Positive Saving Trend',
      description: 'Your savings have increased by 15% compared to last month. Keep up the good work!',
      icon: TrendingUp,
    },
    {
      id: '2',
      type: 'warning',
      title: 'High Entertainment Spending',
      description: 'Your entertainment expenses are 30% higher than your monthly average. Consider setting a budget for this category.',
      icon: AlertTriangle,
    },
    {
      id: '3',
      type: 'tip',
      title: 'Investment Opportunity',
      description: 'Based on your savings pattern, you could potentially invest $500 monthly in a low-risk fund.',
      icon: Brain,
    },
  ];

  const getInsightStyles = (type: Insight['type']): StyleConfig => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50',
          icon: 'text-green-600',
          border: 'border-green-200',
        };
      case 'warning':
        return {
          bg: 'bg-yellow-50',
          icon: 'text-yellow-600',
          border: 'border-yellow-200',
        };
      default:
        return {
          bg: 'bg-blue-50',
          icon: 'text-blue-600',
          border: 'border-blue-200',
        };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">Financial Insights</h1>
        <div className="p-2 bg-emerald-100 rounded-lg">
          <Brain className="w-6 h-6 text-emerald-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="flex items-center gap-4 mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
          <div>
            <h2 className="text-xl font-semibold">Financial Health Score</h2>
            <p className="text-gray-500">Based on your spending patterns and savings</p>
          </div>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full">
          <div
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: '75%' }}
          />
        </div>
        <div className="mt-2 text-right">
          <span className="text-lg font-semibold">75/100</span>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const styles = getInsightStyles(insight.type);
          return (
            <div
              key={insight.id}
              className={`p-6 rounded-xl border ${styles.border} ${styles.bg}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${styles.bg}`}>
                  <insight.icon className={`w-6 h-6 ${styles.icon}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{insight.title}</h3>
                  <p className="text-gray-600">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Insights;