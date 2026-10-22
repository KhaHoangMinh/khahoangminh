# Base image
FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# Build the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1

# Declare ARGs to accept values from Render's build environment
# ARG NEXT_PUBLIC_BACKEND_BASEURL
# ARG NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
# ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
# ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
# ARG NEXT_PUBLIC_API_KEY_CLOUDINARY
# ARG NEXT_PUBLIC_API_SECRET_CLOUDINARY
# ARG NEXT_PUBLIC_CLOUDINARY_BASE

# Map these ARGs to ENV variables
# ENV NEXT_PUBLIC_BACKEND_BASEURL=${NEXT_PUBLIC_BACKEND_BASEURL} \
#     NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY=${NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY} \
#     NEXT_PUBLIC_EMAILJS_SERVICE_ID=${NEXT_PUBLIC_EMAILJS_SERVICE_ID} \
#     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${NEXT_PUBLIC_EMAILJS_TEMPLATE_ID} \
#     NEXT_PUBLIC_API_KEY_CLOUDINARY=${NEXT_PUBLIC_API_KEY_CLOUDINARY} \
#     NEXT_PUBLIC_API_SECRET_CLOUDINARY=${NEXT_PUBLIC_API_SECRET_CLOUDINARY} \
#     NEXT_PUBLIC_CLOUDINARY_BASE=${NEXT_PUBLIC_CLOUDINARY_BASE}

RUN npm run build

# Runner (Hardened)
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Non-root security user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
# Copy only what's required for production
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]