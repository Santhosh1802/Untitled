# Untitled - This is my Learning in MongoDb Express React Node Stack

This is a blog website like Medium

1. User here user can be a creator or reader and if they buy subscription can create more blogs and read more blogs.
2. Admin is one who moderates this whole platform and has control to the overall business logic of this platform.
3. The creator can choose the blog with the type can the paid and unpaid member can view the blog or not by the creator is having the blue tick or not.
4. The blue tick is provided to the creator by when the creator gets the 10000 reads and then he becomes the verified creator and he can do have the ability to monetize some amount of the money.
5. Here the user can save the blog and also share it but when it is only for paid members it can't be shared or cannot be taken screen shot or copy the content and all this process should be under validation.
6. The user session is managed by the server side cookie and if any unwanted requests are made the user will be blocked automatically and usage of the rate limit for each request specific and ensure proper security measures and also require proper testing automation and also block the bot activities.
7. Admin can view the analytics and then provide ads to the platform here add can be based on the location, age, and group with interests in specific categories.
8. To post their adds the advertizer can contact admin team to get the quote for how much it cost and next the advertisement price is by the count of the user comes under the desired audience to focus on the advertisement.
9. The Overall plan for the payment is using payment gateway like razorpay which supports various payment methods.
10. Based on the users count in future the we can scale up with multiple servers.

## 1. Product Vision & Roles

### Core User Roles

1. **Reader**

   * Browse free blogs
   * Limited access to paid content
   * Save blogs
   * Subscribe to creators or platform plans

2. **Creator**

   * Write and publish blogs
   * Choose visibility: Free / Paid
   * Earn reads and qualify for verification (Blue Tick)
   * Monetize after verification

3. **Verified Creator (Blue Tick)**

   * Granted after **10,000 total reads**
   * Can monetize blogs
   * Higher trust ranking
   * Eligible for ads revenue share (future)

4. **Admin**

   * Platform moderation
   * User & creator management
   * Analytics & ads control
   * Payments & disputes
   * Security enforcement

5. **Advertiser (Indirect Role)**

   * Contacts admin
   * Requests ad placement
   * Targets audience by demographics/interests

---

## 2. High-Level System Architecture

### Stack

* **Frontend**: React + TypeScript
* **Backend**: Node.js + Express
* **Database**: MongoDB (Mongoose)
* **Auth**: Server-side session cookies (HttpOnly)
* **Payments**: Razorpay
* **Infra (Future)**:

  * Load balancer
  * Multiple backend servers
  * CDN for content
  * Redis for sessions & rate limits

---

## 3. Phase-Wise Development Plan

### Phase 1: Core Foundation (MVP)

**Goal**: Get a working blogging platform with authentication and basic content flow.

#### Backend

* User authentication (Register/Login/Logout)
* Role handling (Reader, Creator, Admin)
* Session-based auth with HttpOnly cookies
* Blog CRUD
* Blog visibility:
  * Free
  * Paid
* Read count tracking
* Save blog feature
* Share link generation (basic)

#### Frontend

* Auth pages
* Blog feed
* Blog reading page
* Creator dashboard (basic)
* Save & read history

---

### Phase 2: Creator Verification & Monetization Logic

**Goal**: Introduce business rules and creator incentives.

#### Features

* Read counter aggregation per creator
* Auto-verification logic:

  * Trigger at **10,000 reads**
* Blue tick badge display
* Paid blog restrictions:

  * Visible only to subscribers
* Monetization flag enabled only for verified creators

#### Backend Enhancements

* Creator stats service
* Scheduled jobs (cron-like)
* Secure read counting (bot-safe)

---

### Phase 3: Subscription & Payments (Razorpay)

**Goal**: Introduce real money flow.

#### Payments

* Platform subscription plans
* Creator-specific paid content access
* Razorpay order creation
* Webhook verification
* Payment reconciliation

#### Access Control

* Paid blog access validation
* Subscription expiry handling
* Grace period logic

---

### Phase 4: Content Protection & Abuse Prevention

**Goal**: Enforce premium content security.

#### Content Protection (Client + Server)

* Disable copy/select (client)
* Watermark content dynamically
* No screenshot guarantee:

  * Practical limitation acknowledged
  * Focus on deterrence & watermarking
* Signed URLs / expiring access tokens

#### Security

* Rate limiting per API
* IP + User-based throttling
* Bot detection (behavior-based)
* Auto-block suspicious accounts
* CSRF protection
* Input sanitization

---

### Phase 5: Admin Panel & Analytics

**Goal**: Centralized control and insights.

#### Admin Capabilities

* User management
* Blog moderation
* Creator verification override
* Reports & abuse handling
* Revenue dashboards

#### Analytics

* Reads by:

  * Location
  * Age group
  * Interests
* Engagement metrics
* Conversion tracking

---

### Phase 6: Advertisement System

**Goal**: Monetize traffic via targeted ads.

#### Ad Model

* Admin-managed ads only
* Targeting:

  * Location
  * Age range
  * Interest category
* Pricing based on:

  * Audience size
  * Duration
  * Placement priority

#### Flow

* Advertiser contacts admin
* Admin provides quote
* Payment handled offline/online
* Ad scheduled and served dynamically

---

### Phase 7: Testing, Automation & Quality

**Goal**: Production-ready reliability.

#### Testing Strategy

* Unit tests (services, utils)
* API tests (Jest + Supertest)
* Auth & permission tests
* Payment flow tests (mocked)
* Security testing (rate limit, auth bypass)

#### Automation

* CI pipeline
* Linting & formatting
* Test coverage enforcement

---

### Phase 8: Scalability & Future-Proofing

**Goal**: Prepare for growth.

#### Scaling Strategy

* Stateless backend servers
* Redis for:

  * Sessions
  * Rate limits
* MongoDB indexing & sharding
* CDN for images & static assets
* Horizontal scaling behind load balancer

---

## 4. Data Models (High Level)

* **User**

  * role
  * subscription status
  * blocked flag

* **CreatorProfile**

  * readCount
  * verified
  * monetizationEnabled

* **Blog**

  * authorId
  * isPaid
  * visibility rules
  * readCount

* **Subscription**

  * userId
  * plan
  * expiry

* **Ad**

  * targetAudience
  * impressions
  * pricing

---

## 5. Key Learning Outcomes (Why This Is a Strong Project)

* Real-world auth patterns (server sessions)
* Business-driven access control
* Payments & monetization
* Anti-abuse engineering
* Analytics & admin tooling
* Scalable backend design
* Production security mindset

---

## 6. Recommended Execution Order (Practical)

1. Auth + Roles
2. Blog CRUD + Read logic
3. Creator verification
4. Subscriptions
5. Content protection
6. Admin analytics
7. Ads
8. Scaling
