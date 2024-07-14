[clerk.com](https://clerk.com/)

[pexels.com](https://www.pexels.com/)

[prisma.io - mySQL](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql)

[ngrok.com](https://dashboard.ngrok.com/get-started/setup/windows)

<!-- [reference](https://www.youtube.com/watch?v=o080tU3sd0k) -->


# Prisma
### start
```
npx prisma init
```
### create table
```
npx prisma db push
```
### view schema
```
npx prisma studio
```

# ngrok
terminal (Admin)
### install
```
choco install ngrok
```
### create token
```
ngrok config add-authtoken 2ivOO9tCv5pJLJxdfyEzHiBRE4f_6vpRmWYEDqK44VQeh8i6j
```
### deploy app online
```
ngrok http http://localhost:3000
```
[# sync data to your database](https://clerk.com/docs/integrations/webhooks/sync-data)

create Signing Secret in .env

### Install svix

# git
```
git init
git add .
git commit -m "commit"
git remote add origin *repo*
git checkout -b *nameBranch*
git push -u origin *namebranch*
git clone --single-branch -b *namebranch* *repo*
```

# ssh
```
ssh-keygen -t rsa
pbcopy < ~/ .ssh/id_rsa.pub


