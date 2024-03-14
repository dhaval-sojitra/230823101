function Icon(props) {
    return(
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instagram Like Button</title>
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center"
        }}
      >
        <svg
          aria-label="Like"
          height={24}
          viewBox="0 0 48 48"
          width={24}
          style={{ marginRight: 6 }}
        >
          <path d={props.path} fill="none"
          stroke="#262626"
          strokeWidth={2}/>
        </svg>
        <span style={{ fontSize: 14, color: "#262626" }}>{props.name}</span>
      </button>
    </div>
  </>
    );
}
export default Icon;