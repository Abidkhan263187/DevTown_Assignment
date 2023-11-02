export const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <span key={i} role="img" aria-label="Star">
                    <i style={{ color: '#f6bc3e' }} class="fa-solid fa-star"></i>
                </span>
            );
        } else {
            stars.push(
                <span key={i} role="img" aria-label="Star">
                    <i style={{ color: 'gray' }} class="fa-solid fa-star"></i>
                </span>
            );
        }
    }

    return <div>{stars}</div>;
};
