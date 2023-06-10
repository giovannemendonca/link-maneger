'use client'
import { UserInteface } from '@/context/UseContext'
import useFetch from '@/hooks/useFetch'
import { Table, TableBody, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { BoxContainer, SumaryCard, TableCell, TableContainer } from './styles'
import { Heading } from '@/components/Heading'
import { HiUsers } from 'react-icons/hi'
import { FiEdit } from 'react-icons/fi'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function DashBoard() {
  const { data, fetchData } = useFetch()
  const router = useRouter()

  useEffect(() => {
    fecthUsers()
  }, [])

  useEffect(() => {
    const user = localStorage.getItem('user')

    console.log(user)
    if(user === null) {
      router.push('/auth/login')
    }
  })

  const fecthUsers = async () => {
    await fetchData('/users')
  }

  return (
    <>
      <BoxContainer>
        <SumaryCard>
          <header>
            <span>Usuários cadastrados</span>
            <HiUsers
              size={24}
              color='#00B37E'
            />
          </header>
          <strong>{data && data?.length} usuarios</strong>
        </SumaryCard>
        <SumaryCard>
          <header>
            <span>Meus links cadastrados</span>
            <FaExternalLinkSquareAlt
              size={24}
              color='#00B37E'
            />
          </header>
          <strong>{7} links</strong>
        </SumaryCard>
      </BoxContainer>

      {data && (
        <TableContainer>
          <Heading>Meus Links</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='center'>Nome</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item: UserInteface) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell align='center'>
                      {item.name.split(' ')[0]}
                    </TableCell>
                    <TableCell align='center'>{item.email}</TableCell>
                    <TableCell align='center'>{item.email}</TableCell>
                    <TableCell align='center'>
                      <FiEdit
                        size={24}
                        color='#00B37E'
                        cursor='pointer'
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
