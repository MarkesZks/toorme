import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, unique: true })
  username: string;

  @Column({ type: "varchar", length: 200, })
  password: string;

  @Column({ type: "varchar", length: 100, })
  full_name: string;

  @Column({ type: "varchar", length: 100,  unique: true })
  email: string;

  @Column({ type: "varchar", length: 15, nullable: true })
  phone_number: string;

  @Column({ type: "varchar", length: 20, })
  role: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  current_date: Date;
}
