import React from 'react';

export default function OnboardingList({ requests, service, onUpdate }) {
  const extractValue = (field, type = 'display') => {
    if (!field) return '';
    if (typeof field === 'object') {
      return type === 'display' ? field.display_value || '' : field.value || '';
    }
    return field;
  };

  const getStatusBadge = (status) => {
    const statusValue = extractValue(status, 'value');
    const statusDisplay = extractValue(status, 'display');
    
    const badgeClass = {
      'draft': 'badge-draft',
      'pending_manager_approval': 'badge-pending',
      'pending_hr_review': 'badge-pending',
      'pending_it_provisioning': 'badge-in-progress',
      'training_assigned': 'badge-in-progress',
      'completed': 'badge-completed',
      'cancelled': 'badge-cancelled'
    }[statusValue] || 'badge-default';

    return (
      <span className={`status-badge ${badgeClass}`}>
        {statusDisplay || statusValue}
      </span>
    );
  };

  const handleQuickAction = async (requestId, action, event) => {
    // Prevent multiple clicks
    event.target.disabled = true;
    event.target.textContent = 'Processing...';

    try {
      const sysId = extractValue(requestId, 'value');
      console.log(`Starting action: ${action} on request: ${sysId}`);
      
      if (!sysId) {
        throw new Error('Invalid request ID');
      }
      
      let result;
      switch (action) {
        case 'approve_manager':
          result = await service.approveManagerRequest(sysId);
          break;
        case 'approve_hr':
          result = await service.approveHRRequest(sysId);
          break;
        case 'complete_it':
          result = await service.completeITSetup(sysId);
          break;
        case 'complete_training':
          result = await service.completeTraining(sysId);
          break;
        case 'submit':
          result = await service.submitForApproval(sysId);
          break;
        default:
          throw new Error(`Unknown action: ${action}`);
      }
      
      console.log(`Action ${action} completed successfully:`, result);
      
      // Show success message
      alert('✅ Action completed successfully! The request has been updated.');
      
      // Refresh the list after a short delay
      setTimeout(() => {
        onUpdate();
      }, 500);
      
    } catch (error) {
      console.error('Detailed error performing action:', {
        action,
        requestId: extractValue(requestId, 'value'),
        error: error.message,
        stack: error.stack
      });
      
      // Show user-friendly error message
      let errorMessage = '❌ Action failed. ';
      
      if (error.message.includes('403') || error.message.includes('Forbidden')) {
        errorMessage += 'You may not have permission to perform this action.';
      } else if (error.message.includes('404') || error.message.includes('Not Found')) {
        errorMessage += 'The request was not found. It may have been deleted.';
      } else if (error.message.includes('400') || error.message.includes('Bad Request')) {
        errorMessage += 'Invalid request data. Please check the form values.';
      } else if (error.message.includes('500') || error.message.includes('Internal Server')) {
        errorMessage += 'Server error. Please try again or contact support.';
      } else {
        errorMessage += `Error: ${error.message}`;
      }
      
      alert(errorMessage);
    } finally {
      // Re-enable button
      event.target.disabled = false;
      // Restore original text based on action
      const buttonTexts = {
        'approve_manager': 'Manager Approve',
        'approve_hr': 'HR Approve',
        'complete_it': 'Mark IT Complete',
        'complete_training': 'Complete Training',
        'submit': 'Submit for Approval'
      };
      event.target.textContent = buttonTexts[action] || 'Action';
    }
  };

  const getAvailableActions = (request) => {
    const status = extractValue(request.onboarding_status, 'value');
    const managerApproved = extractValue(request.manager_approved) === 'true';
    const hrApproved = extractValue(request.hr_approved) === 'true';
    const itComplete = extractValue(request.it_setup_complete) === 'true';
    
    const actions = [];
    
    if (status === 'draft') {
      actions.push({ key: 'submit', label: 'Submit for Approval', class: 'btn-primary' });
    }
    
    if (status === 'pending_manager_approval' && !managerApproved) {
      actions.push({ key: 'approve_manager', label: 'Manager Approve', class: 'btn-success' });
    }
    
    if (status === 'pending_hr_review' && !hrApproved) {
      actions.push({ key: 'approve_hr', label: 'HR Approve', class: 'btn-success' });
    }
    
    if (status === 'pending_it_provisioning' && !itComplete) {
      actions.push({ key: 'complete_it', label: 'Mark IT Complete', class: 'btn-info' });
    }
    
    if (status === 'training_assigned') {
      actions.push({ key: 'complete_training', label: 'Complete Training', class: 'btn-info' });
    }
    
    return actions;
  };

  if (!requests || requests.length === 0) {
    return (
      <div className="no-requests">
        <p>No onboarding requests found.</p>
      </div>
    );
  }

  return (
    <div className="onboarding-list">
      <div className="list-header">
        <h3>Onboarding Requests ({requests.length})</h3>
      </div>
      
      <div className="requests-table">
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Start Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => {
              const sysId = extractValue(request.sys_id, 'value');
              const firstName = extractValue(request.employee_first_name);
              const lastName = extractValue(request.employee_last_name);
              const department = extractValue(request.department, 'display');
              const jobTitle = extractValue(request.job_title);
              const startDate = extractValue(request.start_date);
              
              return (
                <tr key={sysId}>
                  <td>
                    <div className="employee-info">
                      <strong>{firstName} {lastName}</strong>
                      <small>{extractValue(request.employee_email)}</small>
                    </div>
                  </td>
                  <td>{department}</td>
                  <td>{jobTitle}</td>
                  <td>{startDate}</td>
                  <td>{getStatusBadge(request.onboarding_status)}</td>
                  <td>
                    <div className="action-buttons">
                      {getAvailableActions(request).map((action) => (
                        <button
                          key={action.key}
                          className={`btn btn-sm ${action.class}`}
                          onClick={(e) => handleQuickAction(request.sys_id, action.key, e)}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}