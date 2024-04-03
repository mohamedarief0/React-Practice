import "../scss/custom.scss";

export default function Nav() {
  return (
    <>
      <nav class="navbar bg-dark border-bottom border-body">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            Logo
          </a>

          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
