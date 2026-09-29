export const initialOrders = [
  { id: '101', customer: 'Ayesha K.', item: 'Handcrafted Silk Kurta (Rose Dust)', price: '$85.00', status: 'Dispatched', tracking: 'TK-88391', time: '10:42 AM' },
  { id: '102', customer: 'Meera S.', item: 'Rose Gold Jhumka Earrings', price: '$45.00', status: 'Dispatched', tracking: 'TK-88392', time: '11:15 AM' },
  { id: '103', customer: 'Pooja R.', item: 'Velvet Clutch Bag (Blush Pink)', price: '$65.00', status: 'Pending Dispatch', tracking: 'Pending', time: '11:30 AM' },
  { id: '104', customer: 'Kavita N.', item: 'Organic Rose Water Mist (Pack of 2)', price: '$32.00', status: 'Pending Dispatch', tracking: 'Pending', time: '11:45 AM' },
  { id: '105', customer: 'Divya M.', item: 'Embroidered Organza Dupatta', price: '$95.00', status: 'Pending Dispatch', tracking: 'Pending', time: '12:00 PM' },
];

export const teamMembers = [
  {
    id: 'riya',
    name: 'Riya Sharma',
    role: 'Order Fulfillment Specialist',
    relation: 'Cousin & Part-time Helper',
    status: 'Available',
    activeTasks: 2,
    completedTasks: 38,
    workload: 60,
    avatar: 'riya',
    skills: ['Order Processing', 'Packaging', 'Label Printing'],
    currentTask: 'Dispatch Orders #101–105',
    recentActivity: [
      { action: 'Dispatched Order #102', time: 'Today, 10:42 AM', type: 'allowed' },
      { action: 'Added shipping note', time: 'Today, 10:42 AM', type: 'allowed' },
      { action: 'Attempted refund (blocked)', time: 'Today, 09:17 AM', type: 'blocked' }
    ]
  },
  {
    id: 'neha',
    name: 'Neha Patel',
    role: 'Customer Support',
    relation: 'College Friend',
    status: 'Available',
    activeTasks: 1,
    completedTasks: 24,
    workload: 35,
    avatar: 'neha',
    skills: ['Chat Support', 'FAQ Answers'],
    currentTask: 'Customer Support Reply',
    recentActivity: [
      { action: 'Replied to 12 chat tickets', time: 'Today, 11:30 AM', type: 'allowed' }
    ]
  },
  {
    id: 'ananya',
    name: 'Ananya Mehta',
    role: 'Inventory Manager',
    relation: 'Freelance Assistant',
    status: 'Busy',
    activeTasks: 4,
    completedTasks: 52,
    workload: 85,
    avatar: 'ananya',
    skills: ['Stock Counting', 'SKU Audit'],
    currentTask: 'Summer Silk Inventory Update',
    recentActivity: [
      { action: 'Audited 40 SKU counts', time: 'Today, 08:20 AM', type: 'allowed' }
    ]
  },
  {
    id: 'aman',
    name: 'Aman Khan',
    role: 'Operations Helper',
    relation: 'Brother',
    status: 'Available',
    activeTasks: 0,
    completedTasks: 12,
    workload: 10,
    avatar: 'aman',
    skills: ['Logistics Drop-off', 'Packing'],
    currentTask: 'None (Task expired yesterday)',
    recentActivity: [
      { action: 'Task expired: Inventory Update', time: 'Yesterday', type: 'info' }
    ]
  }
];

export const initialAuditLog = [
  { id: 'aud-01', time: '1:24 PM', user: 'Riya Sharma', action: 'Dispatched #102', scope: 'orders:dispatch', status: 'Allowed' },
  { id: 'aud-02', time: '12:56 PM', user: 'Riya Sharma', action: 'Attempted Refund #103', scope: 'orders:refund', status: 'Blocked' },
  { id: 'aud-03', time: '11:42 AM', user: 'Neha Patel', action: 'View Orders List', scope: 'orders:read', status: 'Allowed' },
  { id: 'aud-04', time: '10:21 AM', user: 'Ananya Mehta', action: 'Update Inventory SKU', scope: 'inventory:write', status: 'Allowed' },
  { id: 'aud-05', time: '09:17 AM', user: 'Riya Sharma', action: 'Attempted Export Customers', scope: 'customers:export', status: 'Blocked' },
  { id: 'aud-06', time: '09:00 AM', user: 'Juhi Sharma (Owner)', action: 'Approved Task & Policy #tsk_001', scope: 'policy:create', status: 'Allowed' }
];

export const developerPayload = {
  taskId: "tsk_001_dispatch",
  owner: "juhi.sharma@couture.com",
  delegatee: {
    userId: "riya_sharma_98",
    name: "Riya Sharma",
    role: "Helper"
  },
  policyVersion: "2026-09-30-v1",
  cryptographicProof: "ecdsa-sha256-sig_8f3d91b4a7c29e",
  permissions: {
    "orders:read": {
      allowed: true,
      recordFilter: ["101", "102", "103", "104", "105"],
      redactFields: ["customer_payment_method", "credit_card_last4", "billing_address", "net_margin"]
    },
    "orders:update_dispatch": {
      allowed: true,
      recordFilter: ["101", "102", "103", "104", "105"]
    },
    "orders:add_note": {
      allowed: true
    },
    "orders:refund": {
      allowed: false,
      enforcement: "HARD_BLOCK_ALERT"
    },
    "payments:access": {
      allowed: false,
      enforcement: "HARD_BLOCK_ALERT"
    },
    "customers:export": {
      allowed: false,
      enforcement: "HARD_BLOCK_ALERT"
    },
    "settings:modify": {
      allowed: false,
      enforcement: "GHOST_UI_LOCKED"
    }
  },
  sessionLimits: {
    validFrom: "2026-09-30T10:00:00Z",
    expiresAt: "2026-09-30T18:00:00Z",
    remainingSeconds: 5520,
    killSwitchEnabled: true,
    autoRevokeOnCompletion: true
  },
  exposureAnalysis: {
    unrestrictedManagerExposure: "82%",
    taskKeyScopedExposure: "12%",
    attackSurfaceReduction: "85.3%"
  }
};
