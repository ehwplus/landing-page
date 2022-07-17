type IReviewProps = {
  reviewId?: string;
  author?: string;
  imageUrl?: string;
  date?: string;
  reviewText: string;
};

const PlayReview = (props: IReviewProps) => (
  <div style={{ paddingTop: '1.5%', paddingBottom: '1.5%' }}>
    <header data-review-id={props.reviewId}>
      <div className={'flex gap-2'} style={{ paddingRight: '2.5%' }}>
        <img src={props.imageUrl} alt={props.author} /> {props.author}
      </div>
      <div style={{ paddingTop: '0.5%', paddingBottom: '0.5%' }}>
        ⭐⭐⭐⭐⭐ <span>{props.date}</span>
      </div>
    </header>
    <div>{props.reviewText}</div>
  </div>
);

export { PlayReview };
