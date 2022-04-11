import React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    //   in 5s the api won't be called anymore
    dedupingInterval: 5000,
  })

  function handleMutateClick() {
    // true : call api false: no call api
    mutate({ name: 'esay frontend' }, true)
  }
  return (
    <div>
      Name: {data?.name || '-----'} <button onClick={handleMutateClick}>mutate</button>
    </div>
  )
}
