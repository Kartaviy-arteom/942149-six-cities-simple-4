import { Expose } from 'class-transformer';
import { City } from '../../../types/сity.type.js';
import { OfferType } from '../../../types/offer-type.enum.js';
import { Amenities } from '../../../types/amenities.type.js';

export default class OfferRdo {
  @Expose()
  public id!: string;

  @Expose()
  public offerTitle!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: City;

  @Expose()
  public preview!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public ratingValue!: number;

  @Expose()
  public offerType!: OfferType;

  @Expose()
  public roomsCount!: number;

  @Expose()
  public guestsCount!: number;

  @Expose()
  public price!: number;

  @Expose()
  public amenitiesList!: Amenities[];

  @Expose()
  public userId!: string;

  @Expose()
  public commentsCount!: number;

  @Expose()
  public coords!: string;
}