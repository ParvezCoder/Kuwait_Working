import React, { useState, useEffect } from 'react';
import { FaEye, FaCheck, FaTimes, FaEnvelope, FaPhone, FaUser, FaCalendar, FaRobot } from 'react-icons/fa';

const ChatbotContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all'); // all, new, contacted, closed

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/chatbot-contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id, status) => {
    try {
      const response = await fetch('/api/chatbot-contacts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        setContacts(prev => 
          prev.map(contact => 
            contact.id === id ? { ...contact, status } : contact
          )
        );
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const viewContact = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const filteredContacts = contacts.filter(contact => {
    if (filter === 'all') return true;
    return contact.status === filter;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      'new': { color: 'bg-blue-100 text-blue-800', text: 'New' },
      'contacted': { color: 'bg-yellow-100 text-yellow-800', text: 'Contacted' },
      'closed': { color: 'bg-green-100 text-green-800', text: 'Closed' }
    };
    
    const config = statusConfig[status] || statusConfig['new'];
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
        {config.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Chatbot Contact Management</h1>
        <p className="text-gray-600">Manage and track customer inquiries from the AI chatbot</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FaRobot className="text-blue-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-2xl font-semibold text-gray-900">{contacts.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FaEnvelope className="text-blue-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">New Inquiries</p>
              <p className="text-2xl font-semibold text-gray-900">
                {contacts.filter(c => c.status === 'new').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <FaPhone className="text-yellow-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Contacted</p>
              <p className="text-2xl font-semibold text-gray-900">
                {contacts.filter(c => c.status === 'contacted').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaCheck className="text-green-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Closed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {contacts.filter(c => c.status === 'closed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({contacts.length})
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'new' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            New ({contacts.filter(c => c.status === 'new').length})
          </button>
          <button
            onClick={() => setFilter('contacted')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'contacted' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Contacted ({contacts.filter(c => c.status === 'contacted').length})
          </button>
          <button
            onClick={() => setFilter('closed')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'closed' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Closed ({contacts.filter(c => c.status === 'closed').length})
          </button>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaUser className="text-blue-600" size={16} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {contact.name || 'Anonymous'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {contact.email && (
                            <div className="flex items-center">
                              <FaEnvelope className="mr-1" size={12} />
                              {contact.email}
                            </div>
                          )}
                          {contact.phone && (
                            <div className="flex items-center">
                              <FaPhone className="mr-1" size={12} />
                              {contact.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {contact.message || 'No additional message'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(contact.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendar className="mr-1" size={12} />
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => viewContact(contact)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <FaEye size={16} />
                      </button>
                      
                      {contact.status === 'new' && (
                        <>
                          <button
                            onClick={() => updateContactStatus(contact.id, 'contacted')}
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Mark as Contacted"
                          >
                            <FaPhone size={16} />
                          </button>
                        </>
                      )}
                      
                      {contact.status === 'contacted' && (
                        <button
                          onClick={() => updateContactStatus(contact.id, 'closed')}
                          className="text-green-600 hover:text-green-900"
                          title="Mark as Closed"
                        >
                          <FaCheck size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <FaRobot className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No contacts found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filter === 'all' 
                ? 'No chatbot contacts have been submitted yet.' 
                : `No contacts with status "${filter}" found.`
              }
            </p>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedContact.name || 'Not provided'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedContact.email || 'Not provided'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedContact.phone || 'Not provided'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedContact.message || 'No additional message'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <div className="mt-1">
                    {getStatusBadge(selectedContact.status)}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Submitted</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Conversation ID</label>
                  <p className="mt-1 text-sm text-gray-900 font-mono">
                    {selectedContact.conversationId}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotContacts;
