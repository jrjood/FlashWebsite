FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# Use `npm install` instead of `npm ci` so the build won't fail when there's no
# package-lock.json present in the frontend folder. If you prefer reproducible
# installs, add a `package-lock.json` to the repo and revert to `npm ci`.
#
# Add `--legacy-peer-deps` to bypass strict peerDependency resolution failures
# (the project includes `react-image-lightbox@5.x` which expects React 16/17 and
# will cause `npm install` to fail under npm v7+ strict resolution). For a
# permanent fix, upgrade/replace the incompatible package or add a lockfile.
RUN npm install --legacy-peer-deps --silent
COPY . .
EXPOSE 5173
CMD ["npm","run","dev","--","--host"]
