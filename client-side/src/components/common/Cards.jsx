import React from 'react';

const styles = {
    container: {
        display: 'flex',
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        placeContent: 'center',
    },
    card: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    cardBtn: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        padding: "10vh",
        height: "25vh",
        width: '15vw',
        color: "#042F19",
        fontWeight: 'bold',
        fontSize: 20,
        borderRadius: 20,
        boxShadow: "4px 4px 6px -1px #042F19",
    }
};

const Card = ({item})=>(
    <div style={styles.card}>
        <button 
            style={styles.cardBtn} 
            title={item.title}
            aria-label={item.title}
            aria-haspopup={item.haspopup||false}
            onClick={item.onclick}
        >{item.label}</button>
    </div>
);

export default ({list})=>(
    <div style={styles.container}>
        {list.map((item, index)=>(
            <Card key={index} item={item} />
        ))}

    </div>
);