const FilterForm = () => {
  return (
    <div className="mb-3">
      <div className="flex items-center">
        <div className="grow">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>
        <div className="grow-0">
          <details className="dropdown">
            <summary className="btn btn-link m-1 no-underline text-black">
              Community
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a>Food</a>
              </li>
              <li>
                <a>Pets</a>
              </li>
              <li>
                <a>Others</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="grow-0">
          <button className="btn btn-success ">Create +</button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
