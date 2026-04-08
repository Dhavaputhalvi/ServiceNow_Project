import React from 'react';

export default function StatusFilter({ selectedStatus, onStatusChange, statusCounts }) {
  const statusOptions = [
    { key: 'all', label: 'All Requests', count: statusCounts.all },
    { key: 'draft', label: 'Draft', count: statusCounts.draft },
    { key: 'pending_manager_approval', label: 'Manager Approval', count: statusCounts.pending_manager_approval },
    { key: 'pending_hr_review', label: 'HR Review', count: statusCounts.pending_hr_review },
    { key: 'pending_it_provisioning', label: 'IT Provisioning', count: statusCounts.pending_it_provisioning },
    { key: 'training_assigned', label: 'Training', count: statusCounts.training_assigned },
    { key: 'completed', label: 'Completed', count: statusCounts.completed },
    { key: 'cancelled', label: 'Cancelled', count: statusCounts.cancelled }
  ];

  return (
    <div className="status-filter">
      <h3>Filter by Status</h3>
      <div className="filter-buttons">
        {statusOptions.map((option) => (
          <button
            key={option.key}
            className={`filter-btn ${selectedStatus === option.key ? 'active' : ''}`}
            onClick={() => onStatusChange(option.key)}
          >
            {option.label}
            <span className="count">({option.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
}