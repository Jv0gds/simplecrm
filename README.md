# simplecrm
## Simple CRM for Small Businesses
- Visitor: can browse public pages and discover content; cannot create or modify records.
- Registered user: can create and manage their own records; can participate in collaboration and workflows.
- Sales Rep: domain-specific permissions to manage workflow steps and relevant content.
- Sales Manager: domain-specific permissions to manage workflow steps and relevant content.
- Admin: full access; manages users and reference data; can moderate and resolve conflicts.

## Business objects
- Lead
- Contact
- Company
- Pipeline Stage
- Activity
- Deal
- Note

## Main user journeys
- A user signs up, discovers content, creates items, and completes the main workflow end to end.
- An admin manages users and reference categories and resolves issues when needed.

## Feature requirements (action-based)

### Visitor
- View the landing page and browse public content when available
- Search and filter the main catalog
- Open a detail page to read more information
- Sign up or log in to access restricted actions
- Report content or request access when appropriate

### Registered user
- Create new records using forms with validation
- Edit and delete own records according to permissions
- Move records through statuses in the main workflow
- Comment, message, or invite collaborators when relevant
- Receive in-app notifications on key events

### Admin
- Manage users, roles, and basic permissions
- Manage categories, tags, and reference lists
- Moderate reported content and resolve conflicts
- Configure simple settings for the project
- Export lists or summaries for supervision

### Cross-cutting features
- Sign up, log in, and manage a profile (when applicable)
- Browse, search, filter, and sort the main lists
- Create, edit, and delete content with role-based permissions
- Track statuses, transitions, and a minimal history on key objects
- Collaborate via invites/sharing, comments, or messaging (at least one)
- Send in-app notifications on key events (invite, reservation, assignment, status change)
- Provide basic admin tools to manage users and categories/tags

## Minimum pages / screens
- Home
- Catalog list
- Detail view
- Create / edit form
- Login / Sign up
- User dashboard
- Notifications center
- Admin panel

## Validation rules
- Required fields must be validated on create and update.
- Only authorized roles can create, edit, delete, or change status.
- Status changes must follow allowed transitions and be logged.
- Search and filters must work together and return consistent results.
- Deleting must require confirmation.

## Acceptance criteria
- A visitor can browse the main catalog and open a detail page.
- A user can sign up, log in, and access a dashboard.
- A registered user can create a record and see it in list and detail views.
- Users cannot edit or delete records they do not own unless they are admin.
- Invalid status transitions are rejected with a clear message.
- Search, filters, and sorting return expected results.
- In-app notifications appear for key events.
- An admin can manage users and reference categories.

---

# simplecrm
## 面向小微企业的简易客户关系管理系统
- 访客：可以浏览公开页面并发现内容；无法创建或修改记录。
- 注册用户：可以创建并管理自己的记录；可以参与协作和工作流。
- 销售代表：拥有特定领域的权限，用于管理工作流步骤和相关内容。
- 销售经理：拥有特定领域的权限，用于管理工作流步骤和相关内容。
- 管理员：拥有完全访问权限；管理用户和参考数据；可以进行审核并解决冲突。

## 业务对象
- 线索 (Lead)
- 联系人 (Contact)
- 公司 (Company)
- 流水线阶段 (Pipeline Stage)
- 活动 (Activity)
- 交易 (Deal)
- 笔记 (Note)

## 主要用户旅程
- 用户注册、发现内容、创建项目，并端到端完成主工作流。
- 管理员管理用户和参考类别，并在需要时解决问题。

## 功能需求 (基于动作)

### 访客
- 查看落地页并在有可用内容时浏览公共内容
- 搜索并过滤主目录
- 打开详情页以阅读更多信息
- 注册或登录以访问受限操作
- 在适当的情况下举报内容或请求访问权限

### 注册用户
- 使用带有校验功能的表单创建新记录
- 根据权限编辑和删除自己的记录
- 在主工作流中移动记录的状态
- 在相关时进行评论、发送消息或邀请协作者
- 接收关键事件的站内通知

### 管理员
- 管理用户、角色和基本权限
- 管理类别、标签和参考列表
- 审核被举报的内容并解决冲突
- 为项目配置简易设置
- 导出用于监督的列表或摘要

### 通用功能
- 注册、登录及管理个人资料（如适用）
- 浏览、搜索、过滤和排序主列表
- 根据基于角色的权限创建、编辑和删除内容
- 追踪关键对象的状态、流转和最小化历史记录
- 通过邀请/共享、评论或消息进行协作（至少包含一种）
- 发送关键事件的站内通知（邀请、预约、分配、状态变更）
- 提供基础管理员工具以管理用户和类别/标签

## 最少页面 / 屏幕
- 首页
- 目录列表
- 详情视图
- 创建 / 编辑表单
- 登录 / 注册
- 用户仪表盘
- 通知中心
- 管理面板

## 校验规则
- 创建和更新时必须校验必填字段。
- 只有获得授权的角色才能执行创建、编辑、删除或更改状态的操作。
- 状态变更必须遵循允许的流转规则并记录日志。
- 搜索和过滤器必须协同工作并返回一致的结果。
- 删除操作必须要求确认。

## 验收标准
- 访客可以浏览主目录并打开详情页。
- 用户可以注册、登录并访问仪表盘。
- 注册用户可以创建记录并在列表和详情视图中查看。
- 除非是管理员，否则用户无法编辑或删除不属于自己的记录。
- 无效的状态流转将被拒绝并显示清晰的提示信息。
- 搜索、过滤和排序返回预期结果。
- 关键事件会触发站内通知。
- 管理员可以管理用户和参考类别。

---