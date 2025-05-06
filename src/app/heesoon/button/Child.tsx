import styles from "./page.module.scss";

const Child = ({
    setColor,
    setWidth,
    width,
}: {
    setColor: (color: string) => void;
    setWidth: (width: number) => void;
    width: number;
}) => {
    return (
        <div className={styles.content}>
            <div className={styles.colorWrap}>
                <p>background-color :</p>
                <button type="button" onClick={() => setColor("red")}>
                    red
                </button>
                <button type="button" onClick={() => setColor("green")}>
                    green
                </button>
                <button type="button" onClick={() => setColor("blue")}>
                    blue
                </button>
            </div>

            <div className={styles.sizeWrap}>
                <p>width : {width}</p>
                <button type="button" onClick={() => setWidth(width + 5)}>
                    +5
                </button>
                <button type="button" onClick={() => setWidth(width - 5)}>
                    -5
                </button>
            </div>
        </div>
    );
};

export default Child;
