import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getEmployee, updateEmployee } from '../../Redux/Actions/EmployeeAction'
import Loader from '../Loader'
import toast from 'react-hot-toast'

const EditEmployee = () => {
  // STATE VARIABLES FOR FORM INPUT
  const [empId, setEmpId] = useState()
  const [name, setName] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [gender, setGender] = useState()
  const [panNo, setPanNo] = useState()
  const [address, setAddress] = useState()
  const [age, setAge] = useState()
  const [role, setRole] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  // FETCHING VALUES FROM STORE
  const { loading, employee } = useSelector(state => state.employee)

  useEffect(() => {
    dispatch(getEmployee(params.empId))
  }, [dispatch, params.empId])

  useEffect(() => {
    if (employee) {
      setEmpId(employee.empId)
      setName(employee.name)
      setAge(employee.age)
      setGender(employee.gender)
      setPhoneNumber(employee.phoneNumber)
      setRole(employee.role)
      setPanNo(employee.panNo)
      setAddress(employee.address)
      setPassword(employee.password)
    }
  }, [employee])

  // FUNCTION TO HANDLE SUBMIT BUTTON -updating employee detailss
  const handleFormSubmit = e => {
    e.preventDefault()
    if (
      !empId ||
      !name ||
      !phoneNumber ||
      !gender ||
      !panNo ||
      !address ||
      !age ||
      !role ||
      !password
    ) {
      toast.error('All fields are required')
      return
    }
    const formData = {
      empId,
      name,
      age,
      gender,
      phoneNumber,
      role,
      panNo,
      address,
      password
    }
    dispatch(updateEmployee(formData, empId))
      .then(message => {
        if (message) {
          setName('')
          setAge('')
          setPhoneNumber('')
          setGender('')
          setPanNo('')
          setAddress('')
          setRole('')
          setPassword('')
          toast.success('Employee Details Updated Successfully')
          navigate('/admin/employees')
        }
      })
      .catch(err => {
        toast.error('Failed to Update Employee details')
      })
  }

  return (
    <>
      {loading === false ? (
        <section className='w-full h-full '>
          <div className='w-[100%] max-w-[1200px] mx-auto my-5'>
            <div className='my-4'>
              <h2 className='text-[2rem] font-medium text-center p-2'>
                Edit Employee Details
              </h2>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className='w-[70%]  flex justify-center items-center flex-wrap gap-6 mx-auto mt-5 mb-20'>
                <div className='w-[40%]'>
                  <label htmlFor='empId' className='leading-7 text-sm '>
                    Employee Id
                  </label>
                  <input
                    type='number'
                    id='empId'
                    value={empId}
                    onChange={e => setEmpId(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='name' className='leading-7 text-sm '>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='age' className='leading-7 text-sm '>
                    Age
                  </label>
                  <input
                    type='number'
                    id='age'
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='gender' className='leading-7 text-sm '>
                    Select Gender
                  </label>
                  <select
                    id='gender'
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                  >
                    <option defaultValue>-- Select --</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='phoneNumber' className='leading-7 text-sm '>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    id='phoneNumber'
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>{' '}
                <div className='w-[40%]'>
                  <label htmlFor='role' className='leading-7 text-sm '>
                    Select Role
                  </label>
                  <select
                    id='role'
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                    value={role}
                    onChange={e => setRole(e.target.value)}
                  >
                    <option defaultValue>-- Select --</option>
                    <option value='admin'>Admin</option>
                    <option value='employee'>Employee</option>
                  </select>
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='panNo' className='leading-7 text-sm '>
                    Pan Card Number
                  </label>
                  <input
                    type='text'
                    id='panNo'
                    value={panNo}
                    onChange={e => setPanNo(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='address' className='leading-7 text-sm '>
                    Address
                  </label>
                  <input
                    type='text'
                    id='address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='password' className='leading-7 text-sm '>
                    Password
                  </label>
                  <input
                    type='text'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 outline-none'
                  />
                </div>
                <div className='w-[80%] flex  justify-center items-center '>
                  {' '}
                  <button
                    type='submit'
                    className='bg-blue-500 px-6  py-3 rounded rounded-sm  text-white'
                  >
                    Update Employee
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default EditEmployee
