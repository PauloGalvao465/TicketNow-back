import { v4 as uuidV4 } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tb_user")
class Users {
  @PrimaryColumn()
  @Column("tb_user")
  id?: string; // (?) Informa que é parametro Opcional

  @Column("nm_user")
  name: string;

  @Column("dt_birth")
  date: Date;

  @Column("cd_cpf")
  cpf: string;

  @Column("ds_category_user")
  category: string;

  @Column("im_user")
  email: string;

  @Column("cd_coupon")
  coupon: string;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Users };
