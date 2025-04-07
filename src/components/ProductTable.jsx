
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Calendar, CheckCircle, UserRound, Clock } from 'lucide-react';
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
      avatar: "https://placehold.co/60x60/15803d/f8fafc.png?text=AM",
    },
    {
      id: 2,
      firstName: "Jordan",
      lastName: "Smith",
      role: "Customer",
      createdAt: new Date(2023, 7, 22),
      status: "active",
      avatar: "https://placehold.co/60x60/eab308/064e3b.png?text=JS",
    },
    {
      id: 3,
      firstName: "Taylor",
      lastName: "Williams",
      role: "Manager",
      createdAt: new Date(2023, 9, 8),
      status: "inactive",
      avatar: "https://placehold.co/60x60/15803d/f8fafc.png?text=TW",
    },
    {
      id: 4,
      firstName: "Casey",
      lastName: "Johnson",
      role: "Customer",
      createdAt: new Date(2024, 0, 12),
      status: "active",
      avatar: "https://placehold.co/60x60/eab308/064e3b.png?text=CJ",
    },
    {
      id: 5,
      firstName: "Riley",
      lastName: "Brown",
      role: "Customer Support",
      createdAt: new Date(2024, 2, 5),
      status: "active",
      avatar: "https://placehold.co/60x60/15803d/f8fafc.png?text=RB",
    },
  ];

  return (
    <div className="bg-dashboard-dark-green p-6 rounded-xl shadow-lg border border-dashboard-green/30 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-dashboard-pale-yellow flex items-center">
          <span className="inline-block w-2 h-8 bg-dashboard-yellow rounded-full mr-3"></span>
          Customer Data
        </h3>
        <button className="text-sm font-medium text-dashboard-yellow hover:text-dashboard-pale-yellow transition-colors px-3 py-1 border border-dashboard-yellow/30 rounded-lg hover:bg-dashboard-yellow/10">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-dashboard-green/20">
        <Table>
          <TableHeader className="bg-dashboard-green/10">
            <TableRow className="border-b border-dashboard-green/20 hover:bg-transparent">
              <TableHead className="text-left text-dashboard-pale-yellow font-medium tracking-wider">
                Customer
              </TableHead>
              <TableHead className="text-left text-dashboard-pale-yellow font-medium tracking-wider">
                Role
              </TableHead>
              <TableHead className="text-left text-dashboard-pale-yellow font-medium tracking-wider">
                Joined
              </TableHead>
              <TableHead className="text-left text-dashboard-pale-yellow font-medium tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-left text-dashboard-pale-yellow font-medium tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow 
                key={customer.id} 
                className={`
                  hover:bg-dashboard-green/5 transition-colors
                  ${index < customers.length - 1 ? 'border-b border-dashboard-green/20' : ''}
                `}
              >
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img 
                        className="h-12 w-12 rounded-full border-2 border-dashboard-yellow/30" 
                        src={customer.avatar} 
                        alt={`${customer.firstName} ${customer.lastName}`} 
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-dashboard-off-white">{customer.firstName} {customer.lastName}</div>
                      <div className="text-xs text-dashboard-pale-yellow/70">{customer.firstName.toLowerCase()}{customer.lastName.toLowerCase()}@example.com</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-dashboard-off-white inline-flex items-center gap-1">
                    <UserRound size={14} className="text-dashboard-yellow opacity-70" />
                    {customer.role}
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="text-sm text-dashboard-pale-yellow/80 inline-flex items-center gap-1">
                    <Calendar size={14} className="text-dashboard-green opacity-70" />
                    {format(customer.createdAt, 'MMM dd, yyyy')}
                  </div>
                  <div className="text-xs text-dashboard-pale-yellow/50 inline-flex items-center gap-1 mt-1">
                    <Clock size={12} className="text-dashboard-yellow opacity-50" />
                    {format(customer.createdAt, 'h:mm a')}
                  </div>
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  {customer.status === "active" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dashboard-green/20 text-dashboard-pale-yellow border border-dashboard-green/30">
                      <CheckCircle size={14} className="mr-1 text-dashboard-green" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/20 text-gray-300 border border-gray-600/30">
                      Inactive
                    </span>
                  )}
                </TableCell>
                <TableCell className="py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-xs px-3 py-1.5 bg-dashboard-yellow/10 text-dashboard-yellow rounded-md hover:bg-dashboard-yellow/20 transition-colors border border-dashboard-yellow/30">
                      View
                    </button>
                    <button className="text-xs px-3 py-1.5 bg-dashboard-green/10 text-dashboard-green rounded-md hover:bg-dashboard-green/20 transition-colors border border-dashboard-green/30">
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
