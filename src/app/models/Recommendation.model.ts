import { User } from "./User.model";

export class Recommendation {
  constructor(
    public idRecommendation: number,
    public comment: string,
    public approved: boolean,
    public numberStars: number,
    public user: User
  ) { }
}
