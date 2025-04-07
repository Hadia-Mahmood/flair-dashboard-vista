
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Calendar, CheckCircle, UserRound } from 'lucide-react';
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
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Customer Data</h3>
        <button className="text-sm font-medium text-dashboard-blue hover:text-dashboard-indigo transition-colors">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left text-gray-500 font-medium tracking-wider">
                Customer
              </TableHead>
              <TableHead className="text-left text-gray-500 font-medium tracking-wider">
                Role
              </TableHead>
              <TableHead className="text-left text-gray-500 font-medium tracking-wider">
                Joined
              </TableHead>
              <TableHead className="text-left text-gray-500 font-medium tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-left text-gray-500 font-medium tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img className="h-12 w-12 rounded-full border-2 border-gray-200" src={customer.avatar} alt={`${customer.firstName} ${customer.lastName}`} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{customer.firstName} {customer.lastName}</div>
                      <div className="text-sm text-gray-500">{customer.firstName.toLowerCase()}{customer.lastName.toLowerCase()}@example.com</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 inline-flex items-center gap-1">
                    <UserRound size={14} className="text-dashboard-blue opacity-70" />
                    {customer.role}
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 inline-flex items-center gap-1">
                    <Calendar size={14} className="text-dashboard-purple opacity-70" />
                    {format(customer.createdAt, 'MMM dd, yyyy')}
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  {customer.status === "active" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-dashboard-green">
                      <CheckCircle size={14} className="mr-1" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      Inactive
                    </span>
                  )}
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-xs px-2 py-1 bg-blue-50 text-dashboard-blue rounded-md hover:bg-blue-100 transition-colors">
                      View
                    </button>
                    <button className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
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

