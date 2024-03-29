import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length:30})
    email:string;

    @Column({type:'varchar', length:30})
    password:string; 
}
