# Base image
FROM node:24-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app 
COPY package.json package-lock.json* ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# # Declare ARGs to accept values from Render's build environment
# ARG NEXT_PUBLIC_BACKEND_BASEURL
# ARG NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
# ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
# ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
# ARG NEXT_PUBLIC_API_KEY_CLOUDINARY
# ARG NEXT_PUBLIC_API_SECRET_CLOUDINARY
# ARG NEXT_PUBLIC_CLOUDINARY_BASE

# # Map these ARGs to ENV variables
# ENV NEXT_PUBLIC_BACKEND_BASEURL=${NEXT_PUBLIC_BACKEND_BASEURL} \
#     NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY=${NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY} \
#     NEXT_PUBLIC_EMAILJS_SERVICE_ID=${NEXT_PUBLIC_EMAILJS_SERVICE_ID} \
#     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${NEXT_PUBLIC_EMAILJS_TEMPLATE_ID} \
#     NEXT_PUBLIC_API_KEY_CLOUDINARY=${NEXT_PUBLIC_API_KEY_CLOUDINARY} \
#     NEXT_PUBLIC_API_SECRET_CLOUDINARY=${NEXT_PUBLIC_API_SECRET_CLOUDINARY} \
#     NEXT_PUBLIC_CLOUDINARY_BASE=${NEXT_PUBLIC_CLOUDINARY_BASE}

# Build app (Next.js will create .next folder)
RUN npm run build

# Production runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built assets from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Run on port 3000
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the app
CMD ["npm", "start"]