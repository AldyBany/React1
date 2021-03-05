const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <>
      <h2>{title}</h2>
      {blogs.map((blog) => {
        const { id, title, author, body } = blog;

        return (
          <div
            key={id}
            className="d-flex align-items-center justify-content-between py-3 px-4 border-bottom my-4 hover-shadow rounded"
          >
            <div>
              <p class="h4 mb-3 text-danger">{title}</p>
              <p>Written by {author}</p>
            </div>
            <button class="btn btn-danger" onClick={() => handleDelete(id)}>
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default BlogList;
