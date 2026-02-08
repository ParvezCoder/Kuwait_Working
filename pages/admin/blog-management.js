import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const BlogManagement = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        author: '',
        content: '',
        imageId: '',
        sortBy: 1,
        active: true
    });
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState('');

    const router = useRouter();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/blog-management');
            if (response.ok) {
                const data = await response.json();
                setBlogs(data);
            }
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setMessage('Failed to fetch blogs');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put('/api/blog-management', { ...formData, id: editingId });
                setMessage('Blog updated successfully');
            } else {
                await axios.post('/api/blog-management', formData);
                setMessage('Blog added successfully');
            }
            
            setFormData({
                title: '',
                slug: '',
                author: '',
                content: '',
                imageId: '',
                sortBy: 1,
                active: true
            });
            setEditingId(null);
            fetchBlogs();
        } catch (err) {
            setMessage('Operation failed');
        }
    };

    const handleEdit = (blog) => {
        setFormData({
            title: blog.WebSiteShortName || '',
            slug: blog.WebSitePageSubSerial || '',
            author: blog.WebEnglish || '',
            content: blog.EnglishHTML || '',
            imageId: blog.IMAGEID || '',
            sortBy: blog.SortBy || 1,
            active: blog.active === 1
        });
        setEditingId(blog.MyWebSiteAutoGenID);
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this blog?')) {
            try {
                await axios.delete(`/api/blog-management?id=${id}`);
                setMessage('Blog deleted successfully');
                fetchBlogs();
            } catch (err) {
                setMessage('Delete failed');
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    if (loading) {
        return (
            <div className="container mt-5">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Blog Management</h1>
            
            {message && (
                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                    {message}
                </div>
            )}

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            {editingId ? 'Edit Blog' : 'Add New Blog'}
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Slug</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Content</label>
                                    <textarea
                                        className="form-control"
                                        name="content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        rows="4"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Image ID</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="imageId"
                                        value={formData.imageId}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Sort Order</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="sortBy"
                                        value={formData.sortBy}
                                        onChange={handleInputChange}
                                        min="1"
                                    />
                                </div>
                                
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="active"
                                        checked={formData.active}
                                        onChange={handleInputChange}
                                    />
                                    <label className="form-check-label">Active</label>
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        {editingId ? 'Update Blog' : 'Add Blog'}
                                    </button>
                                    {editingId && (
                                        <button 
                                            type="button" 
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                setEditingId(null);
                                                setFormData({
                                                    title: '',
                                                    slug: '',
                                                    author: '',
                                                    content: '',
                                                    imageId: '',
                                                    sortBy: 1,
                                                    active: true
                                                });
                                            }}
                                        >
                                            Cancel Edit
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Existing Blogs
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Slug</th>
                                            <th>Author</th>
                                            <th>Sort</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {blogs.map((blog) => (
                                            <tr key={blog.MyWebSiteAutoGenID}>
                                                <td>{blog.WebSiteShortName}</td>
                                                <td>{blog.WebSitePageSubSerial}</td>
                                                <td>{blog.WebEnglish}</td>
                                                <td>{blog.SortBy}</td>
                                                <td>
                                                    <span className={`badge ${blog.active === 1 ? 'bg-success' : 'bg-danger'}`}>
                                                        {blog.active === 1 ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-primary me-2"
                                                        onClick={() => handleEdit(blog)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(blog.MyWebSiteAutoGenID)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogManagement;
