Databsae : postgres
Backend : Nest `npm run start:dev`
Front End : Nest

<!-- How to start Databsae -->
`psql -h localhost -p 5432 -U nestjs_user -d nestjs_db`
password : `nestjs_password`
main_portal_password : `123`

<!-- Prisma Stuf -->
Run  when new model declared `npx prisma migrate dev --name init`
Run for prisma client `npx prisma generate`
see database at a glance `npx prisma studio`
Synchronize Schema `npx prisma db pull`

