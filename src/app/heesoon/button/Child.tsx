const Child = ({ color, isActive, size }: { color: string; isActive: boolean; size: number }) => {
    console.log(`[color: ${color}] [isActive : ${isActive}] [size: ${size}]`);

    // 스타일 객체
    const style = {
        backgroundColor: color,
        display: isActive ? "block" : "none",
        width: size,
    };

    return <span style={style}></span>;
};

export default Child;
