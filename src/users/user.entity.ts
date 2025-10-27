import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({ default: false })
    isVerified: boolean;

    @Column({ type: 'varchar', nullable: true })
    verificationToken: string | null;

    @Column({ type: 'timestamp', nullable: true })
    verificationTokenExpires: Date | null;

    @Column({ type: 'varchar', nullable: true })
    refreshToken: string | null;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}