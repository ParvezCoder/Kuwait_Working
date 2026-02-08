import React from 'react';
import Link from 'next/link';
import { FaRobot, FaBlog, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your website content and customer interactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chatbot Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaRobot className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Chatbot Management</h3>
              <p className="text-sm text-gray-600">Manage AI chatbot contacts</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link 
              href="/admin/chatbot-contacts"
              className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Contacts
            </Link>
            <p className="text-xs text-gray-500">
              Track customer inquiries and manage follow-ups
            </p>
          </div>
        </div>

        {/* Blog Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaBlog className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Blog Management</h3>
              <p className="text-sm text-gray-600">Manage blog posts and content</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link 
              href="/admin/blog-management"
              className="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Manage Blogs
            </Link>
            <p className="text-xs text-gray-500">
              Create, edit, and delete blog posts
            </p>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaUsers className="text-purple-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
              <p className="text-sm text-gray-600">Manage admin users and permissions</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link 
              href="/admin/users"
              className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Manage Users
            </Link>
            <p className="text-xs text-gray-500">
              Control access and user roles
            </p>
          </div>
        </div>

        {/* Analytics */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <FaChartBar className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
              <p className="text-sm text-gray-600">View website statistics</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link 
              href="/admin/analytics"
              className="block w-full bg-yellow-600 text-white text-center py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors"
            >
              View Analytics
            </Link>
            <p className="text-xs text-gray-500">
              Monitor traffic and engagement
            </p>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <FaCog className="text-gray-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
              <p className="text-sm text-gray-600">Configure system settings</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link 
              href="/admin/settings"
              className="block w-full bg-gray-600 text-white text-center py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              Configure
            </Link>
            <p className="text-xs text-gray-500">
              System configuration and preferences
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FaRobot className="text-indigo-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              <p className="text-sm text-gray-600">Common admin tasks</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link 
              href="/admin/add"
              className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Add Content
            </Link>
            <p className="text-xs text-gray-500">
              Quickly add new content or services
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center text-gray-500 py-8">
            <FaChartBar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recent activity</h3>
            <p className="text-sm text-gray-500">
              Activity will appear here as you use the admin features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
