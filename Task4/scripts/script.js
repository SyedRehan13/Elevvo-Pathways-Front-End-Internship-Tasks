function filterPosts(category) {
    const posts = document.querySelectorAll('.blog-card');
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}