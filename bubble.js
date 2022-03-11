function styleAdd(blog) {
  blog.style.backgroundColor = 'rgba(255,165,0,0.6)';
  blog.style.border = '2px solid green'
  blog.style.borderRadius = '15px'
  blog.style.padding = '20px'
  blog.style.margin = '20px'
  blog.style.fontSize = '18px'
}
function addBlog() {
  const newBlog = document.createElement('div');
  newBlog.classList.add('blog');
  newBlog.innerHTML = `
  <h2 class="blog-names">New BLOG</h2>
  <p>Error dolorum, ex vitae hic aliquam aut quisquam id asperiores itaque illum voluptatibus enim beatae eum
  facilis aperiam velit! Dolore assumenda consequatur atque recusandae, hic et beatae quasi perferendis dolor!</p>
  `
  document.getElementById('blogs').appendChild(newBlog);
  styleAdd(newBlog);
}

const blogs = document.querySelectorAll('#blogs .blog');
for (const blog of blogs) {
  styleAdd(blog);
}
document.getElementById('blogs').addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() == 'div') {
    e.target.style.backgroundColor = 'pink';
  }
  else {
    e.target.parentNode.style.backgroundColor = 'pink';
  }
})

