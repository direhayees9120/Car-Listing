import"./Button.css";
const BButton = ({bgColor, bradius, btnName, btnfunc,children}) => {
    const styles ={
        backgroundColor: bgColor || 'blue',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: bradius || '5px',
        cursor: 'pointer',
        margin: "5px"
    };
    return <button onClick={btnfunc} style={styles} className={btnName} >{children}</button>
    
};

export default BButton;