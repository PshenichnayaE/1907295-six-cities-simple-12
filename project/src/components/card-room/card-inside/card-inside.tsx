import { Offer } from '../../../types/offers';

type InsideListProp = {
  offer: Offer;
};

export default function InsideList({offer}: InsideListProp): JSX.Element {
  const {goods} = offer;
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((item) => (
          <li key={item} className="property__inside-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
