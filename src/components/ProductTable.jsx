
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Calendar, CheckCircle, UserRound, XCircle } from 'lucide-react';
import { format } from 'date-fns';

const CustomerTable = () => {
  const customers = [
    {
      id: 1,
      firstName: "Alex",
      lastName: "Morgan",
      role: "Admin",
      createdAt: new Date(2023, 5, 15),
      status: "active",
      avatar: "https://placehold.co/60x60/4F46E5/FFFFFF.png?text=AM",
    },
    {
      id: 2,
      firstName: "Jordan",
      lastName: "Smith",
      role: "Customer",
      createdAt: new Date(2023, 7, 22),
      status: "active",
      avatar: "https://placehold.co/60x60/10B981/FFFFFF.png?text=JS",
    },
    {
      id: 3,
      firstName: "Taylor",
      lastName: "Williams",
      role: "Manager",
      createdAt: new Date(2023, 9, 8),
      status: "inactive",
      avatar: "https://placehold.co/60x60/F97316/FFFFFF.png?text=TW",
    },
    {
      id: 4,
      firstName: "Casey",
      lastName: "Johnson",
      role: "Customer",
      createdAt: new Date(2024, 0, 12),
      status: "active",
      avatar: "https://placehold.co/60x60/EC4899/FFFFFF.png?text=CJ",
    },
    {
      id: 5,
      firstName: "Riley",
      lastName: "Brown",
      role: "Customer Support",
      createdAt: new Date(2024, 2, 5),
      status: "active",
      avatar: "https://placehold.co/60x60/FBBF24/FFFFFF.png?text=RB",
    },
  ];

  return (
    <div className="enhanced-chart-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800 flex items-center">
          <span className="inline-block w-2 h-8 bg-dashboard-accent rounded-full mr-3"></span>
          Customer Data
        </h3>
        <button className="px-4 py-2 text-sm bg-blue-50 text-dashboard-accent font-medium rounded-lg hover:bg-blue-100 transition-colors">
          View All Customers
        </button>
      </div>
      
      <div className="enhanced-table">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/70">
              <TableHead className="text-left text-gray-600 font-medium tracking-wider">
                Customer
              </TableHead>
              <TableHead className="text-left text-gray-600 font-medium tracking-wider">
                Role
              </TableHead>
              <TableHead className="text-left text-gray-600 font-medium tracking-wider">
                Joined
              </TableHead>
              <TableHead className="text-left text-gray-600 font-medium tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-left text-gray-600 font-medium tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-blue-50/30 transition-colors border-b border-gray-100 last:border-0">
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img className="h-12 w-12 rounded-full border-2 border-gray-100 shadow-sm" src={customer.avatar} alt={`${customer.firstName} ${customer.lastName}`} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-gray-900">{customer.firstName} {customer.lastName}</div>
                      <div className="text-xs text-gray-500">{customer.firstName.toLowerCase()}{customer.lastName.toLowerCase()}@example.com</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-800 inline-flex items-center gap-1.5">
                    <UserRound size={16} className="text-dashboard-accent opacity-80" />
                    {customer.role}
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600 inline-flex items-center gap-1.5">
                    <Calendar size={16} className="text-blue-500 opacity-80" />
                    {format(customer.createdAt, 'MMM dd, yyyy')}
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  {customer.status === "active" ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                      <CheckCircle size={14} className="mr-1 text-green-500" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
                      <XCircle size={14} className="mr-1 text-gray-500" /> Inactive
                    </span>
                  )}
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 font-medium rounded-md hover:bg-blue-100 transition-colors">
                      View
                    </button>
                    <button className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
                      Edit
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerTable;
