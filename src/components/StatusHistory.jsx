import React from 'react'
import { useSelector } from 'react-redux';
import { formatDate } from '../utils/constants';

const StatusHistory = () => {
  const statusHistory = useSelector((store) => store.statusHistory);

  if (statusHistory.length === 0) return <p>No status history available.</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white border-t border-gray-300 pt-8">
      <h2 className="text-xl font-bold mb-1">Status Change History</h2>
      <p className="text-gray-400 text-sm mb-6">Recent first</p>

      <div className="border-gray-100 space-y-2">
        {statusHistory.map((entry, index) => (
          <div key={index}>

            <div className="bg-gray-50 p-4 shadow-sm">
              <p className="text-xs text-gray-400 mb-1">
                {formatDate(entry.changedAt)}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-700">
                  {entry.oldStatus}
                </span>

                <span className="text-gray-400 text-sm">→</span>

                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700">
                  {entry.newStatus}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default StatusHistory