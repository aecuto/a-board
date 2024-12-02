const Card = ({ index }: { index?: number }) => {
  return (
    <div
      className={`card bg-base-100 shadow-xl border-b-4 rounded-none ${
        index === 0 && "rounded-t-3xl"
      }`}
    >
      <div className="card-body">
        <div className="flex items-center">
          <div className="mr-3">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="opacity-50">Zach</div>
        </div>
        <div className="badge badge-outline">History</div>
        <h2 className="card-title">The Beginning of the End of the World</h2>
        <p className="line-clamp-2">
          The afterlife sitcom The Good Place comes to its culmination, the
          show’s two protagonists, Eleanor and Chidi, contemplate their future.
          Having lived thousands upon thousands of lifetimes together, and
          having experienced virtually everything this life has to offer, they
          are weary. It is time for it all to end. The show’s solution to this
          perpetual happiness-cum-weariness is extinction. When you have had
          enough, when you are utterly sated by love and joy and pleasure, you
          can walk through a passage to nothingness. And Chidi has had enough.
        </p>
        <div className="flex items-center">
          <div className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>
          <div>
            <div className="opacity-50">3 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
