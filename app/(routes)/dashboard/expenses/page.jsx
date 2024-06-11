"use client"
import React from 'react'
import ExpenseListTable from './_components/ExpenseListTable'
import { db } from '@/utils/dbConfig'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import { toast } from 'sonner'

function ExpensesScr() {
  return (
    <div>
     Expense Table
    </div>
  )
}

export default ExpensesScr
