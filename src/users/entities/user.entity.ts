// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length:30})
    email:string;

    @Column({type:'varchar', length:30})
    password:string; 
}
