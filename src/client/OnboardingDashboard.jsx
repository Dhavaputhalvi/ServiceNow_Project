import React, { useState, useEffect, useMemo } from 'react';
import { OnboardingService } from './services/OnboardingService.js';
import OnboardingRequestForm from './components/OnboardingRequestForm.jsx';
import OnboardingList from './components/OnboardingList.jsx';
import StatusFilter from './components/StatusFilter.jsx';
import './styles/dashboard.css';

export default function OnboardingDashboard() {
  const service = useMemo(() => new OnboardingService(), []);
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRequests();
  }, [service]);

  useEffect(() => {
    filterRequests();
  }, [requests, selectedStatus]);

  const loadRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await service.getAllRequests();
      setRequests(data);
    } catch (err) {
      setError('Failed to load onboarding requests. Please try again.');
      console.error('Error loading requests:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterRequests = () => {
    if (selectedStatus === 'all') {
      setFilteredRequests(requests);
    } else {
      const filtered = requests.filter(request => {
        const status = typeof request.onboarding_status === 'object' 
          ? request.onboarding_status.value 
          : request.onboarding_status;
        return status === selectedStatus;
      });
      setFilteredRequests(filtered);
    }
  };

  const handleRequestCreated = () => {
    setShowForm(false);
    loadRequests();
  };

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  const getStatusCounts = () => {
    const counts = {
      all: requests.length,
      draft: 0,
      pending_manager_approval: 0,
      pending_hr_review: 0,
      pending_it_provisioning: 0,
      training_assigned: 0,
      completed: 0,
      cancelled: 0
    };

    requests.forEach(request => {
      const status = typeof request.onboarding_status === 'object' 
        ? request.onboarding_status.value 
        : request.onboarding_status;
      if (counts.hasOwnProperty(status)) {
        counts[status]++;
      }
    });

    return counts;
  };

  if (loading) {
    return <div className="loading">Loading onboarding requests...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={loadRequests}>Retry</button>
      </div>
    );
  }

  const statusCounts = getStatusCounts();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Employee Onboarding Dashboard</h1>
        <div className="dashboard-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : 'New Onboarding Request'}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={loadRequests}
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Requests</h3>
          <span className="stat-number">{statusCounts.all}</span>
        </div>
        <div className="stat-card">
          <h3>Pending Approval</h3>
          <span className="stat-number">
            {statusCounts.pending_manager_approval + statusCounts.pending_hr_review}
          </span>
        </div>
        <div className="stat-card">
          <h3>In Progress</h3>
          <span className="stat-number">
            {statusCounts.pending_it_provisioning + statusCounts.training_assigned}
          </span>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <span className="stat-number">{statusCounts.completed}</span>
        </div>
      </div>

      {showForm && (
        <div className="form-section">
          <OnboardingRequestForm
            service={service}
            onSuccess={handleRequestCreated}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="main-content">
        <StatusFilter
          selectedStatus={selectedStatus}
          onStatusChange={handleStatusChange}
          statusCounts={statusCounts}
        />
        
        <OnboardingList
          requests={filteredRequests}
          service={service}
          onUpdate={loadRequests}
        />
      </div>
    </div>
  );
}