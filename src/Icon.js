function Icon({path, text, fill, viewbox}) {
    return(
    <>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px'  }}>
            <svg  style={{paddingTop: 5}} width="24" height="24"  fill={fill} stroke="currentColor"  viewBox={viewbox} color='rgb(122, 122, 122)' >
            <path d={path} />
            </svg>
            <span style={{textAlign: "center" , fontSize: "14px", color: "rgb(122, 122, 122)"}}>{text}</span>
            </div>
  </>
    );
}
export default Icon;