import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { getTaxDeclaration } from '../../Redux/Actions/TaxAction'
import Loader from '../Loader'

const ViewTaxSubmission = () => {
  // STATE VARIABLES FOR FORM INPUT
  const [empId, setEmpId] = useState()
  const [taxId, setTaxId] = useState()
  const [name, setName] = useState()
  const [panNo, setPanNo] = useState()
  const [address, setAddress] = useState()
  const [financialYear, setFinancialYear] = useState()
  const [anyOtherIncome, setAnyOtherIncome] = useState('')
  const [sukanyaSamriddhiAccount, setSukanyaSamruddhiAccount] = useState('')
  const [ppf, setPpf] = useState('')
  const [lic, setLic] = useState('')
  const [tuitionFee, setTuitionFee] = useState('')
  const [fixedDeposit, setFixedDeposit] = useState('')
  const [interestHousingLoan, setInterestHousingLoan] = useState('')
  const [nps, setNps] = useState('')
  const [educationLoan, setEducationLoan] = useState('')
  const [principalHousingLoan, setPrincipalHousingLoan] = useState('')
  const [houseRent, setHouseRent] = useState('')
  const [tds, setTds] = useState('')
  const [healthInsurance, setHealthInsurance] = useState('')
  const [preventiveHealthCheckup, setPreventiveHealthCheckup] = useState('')
  const [ltaChecked, setLtaChecked] = useState(true)

  const [editable, setEditable] = useState(false)

  const { user } = useSelector(state => state.auth)

  //FETCHING VALUE FROM OF VARIABLE'S FROM STORE
  const { loading, tax } = useSelector(state => state.tax)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getTaxDeclaration(params.taxId))
  }, [dispatch])

  // UPDATING VALUES OF VARIABLE ACCORDING TO STATE
  useEffect(() => {
    if (user) {
      setEmpId(user.empId)
      setName(user.name)
      setPanNo(user.panNo)
      setAddress(user.address)
    }
    if (tax) {
      setTaxId(tax.taxId)
      setFinancialYear(tax.financialYear)
      setAnyOtherIncome(tax.anyOtherIncome)
      setSukanyaSamruddhiAccount(tax.sukanyaSamriddhiAccount)
      setPpf(tax.ppf)
      setLic(tax.lifeInsurancePremium)
      setTuitionFee(tax.tuitionFee)
      setFixedDeposit(tax.bankFixedDeposit)
      setPrincipalHousingLoan(tax.principalHousingLoan)
      setNps(tax.nps)
      setEducationLoan(tax.higherEducationLoanInterest)
      setInterestHousingLoan(tax.interestHousingLoan)
      setHouseRent(tax.houseRent)
      setTds(tax.tds)
      setHealthInsurance(tax.mediClaim)
      setPreventiveHealthCheckup(tax.preventiveHealthCheckUp)
      setLtaChecked(tax.lta)
      setEditable(false)
    }
  }, [tax, user])

  return (
    <>
      {loading === false ? (
        <section className='w-full h-full'>
          <div className='max-w-[1200px] mx-auto  my-2'>
            <div className='text-[1.8rem] font-medium text-center p-2 my-2'>
              <h1>Tax Declaration</h1>
            </div>
            <div className='flex justify-between items-center my-2 border-2 border-solid border-black py-2'>
              <div className='text-[16px] font-medium  p-4'>
                Employee ID :<span className='p-2'> {empId}</span>
              </div>
              <div className='text-[16px] font-medium  p-4'>
                Employee Name :<span className='p-2'> {name}</span>
              </div>
              <div className='text-[16px] font-medium  p-4'>
                Financial Year :<span className='p-2'> {financialYear}</span>
              </div>
              <div className='text-[16px] font-medium  p-4'>
                Tax declaration Id :<span className='p-2'> {taxId}</span>
              </div>
            </div>

            <div className='border-solid border-2 border-black'>
              <form>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label htmlFor='income' className='text-[14px]'>
                      1.) Any other income (interest from property, rental
                      income, etc.)
                    </label>
                  </div>
                  <div className='w-[25%]'>
                    <input
                      type='text'
                      name='income'
                      id='income'
                      placeholder='0'
                      className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                      value={anyOtherIncome}
                      onChange={e => setAnyOtherIncome(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
                <div className=''>
                  <h4 className='text-[14px] py-2 ml-2'>
                    2.)Investment under Section 80C
                  </h4>
                  <div className='py-2 ml-3'>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label htmlFor='ssa' className='text-[14px] py-2'>
                          a.) Sukanya Samriddhi Account
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='ssa'
                          id='ssa'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={sukanyaSamriddhiAccount}
                          onChange={e =>
                            setSukanyaSamruddhiAccount(e.target.value)
                          }
                          disabled={!editable}
                        />
                      </div>
                    </div>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label htmlFor='ppf' className='text-[14px] py-2'>
                          a.) PPF/NSC
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='ppf'
                          id='ppf'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={ppf}
                          onChange={e => setPpf(e.target.value)}
                          disabled={!editable}
                        />
                      </div>
                    </div>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label htmlFor='lic' className='text-[14px] py-2'>
                          b.) Life Insurance Premium
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='lic'
                          id='lic'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={lic}
                          onChange={e => setLic(e.target.value)}
                          disabled={!editable}
                        />
                      </div>
                    </div>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label
                          htmlFor='tuitionfee'
                          className='text-[14px] py-2'
                        >
                          c.) Tuition fee for child
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='tuitionfee'
                          id='tuitionfee'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={tuitionFee}
                          onChange={e => setTuitionFee(e.target.value)}
                          disabled={!editable}
                        />
                      </div>
                    </div>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label
                          htmlFor='fixed-deposit'
                          className='text-[14px] py-2'
                        >
                          d.) Bank Fixed Deposits/NSC (in Five Years)
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='fixed-deposit'
                          id='fixed-deposit'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={fixedDeposit}
                          onChange={e => setFixedDeposit(e.target.value)}
                          disabled={!editable}
                        />
                      </div>
                    </div>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label htmlFor='housing' className='text-[14px] py-2'>
                          e.) Principal amount of housing loan paid during the
                          year
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='housing'
                          id='housing'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={principalHousingLoan}
                          onChange={e =>
                            setPrincipalHousingLoan(e.target.value)
                          }
                          disabled={!editable}
                        />
                      </div>
                    </div>
                    <div className='flex  w-[100%]'>
                      <div className='w-[70%] py-1'>
                        <label htmlFor='NPS' className='text-[14px] py-2'>
                          d.) National Pension Scheme 80CCD (1B) (Limit 50k)
                        </label>
                      </div>
                      <div className='w-[25%] my-1'>
                        <input
                          type='text'
                          name='NPS'
                          id='NPS'
                          placeholder='0'
                          className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                          value={nps}
                          onChange={e => setNps(e.target.value)}
                          disabled={!editable}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label htmlFor='health' className='text-[14px] py-2'>
                      3.) Higher Education Loan interest via EDE
                    </label>
                  </div>
                  <div className='w-[25%] '>
                    <input
                      type='text'
                      name='health'
                      id='health'
                      placeholder='0'
                      className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                      value={educationLoan}
                      onChange={e => setEducationLoan(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label htmlFor='housing-loan' className='text-[14px] py-2'>
                      4.)Interest paid on Housing Loan via 24
                    </label>
                  </div>
                  <div className='w-[25%]'>
                    <input
                      type='text'
                      name='housing-loan'
                      id='housing-loan'
                      placeholder='0'
                      className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                      value={interestHousingLoan}
                      onChange={e => setInterestHousingLoan(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label htmlFor='house-rent' className='text-[14px] py-2'>
                      5.) House Rent paid (every month/For above amt Rs
                      8333/-PM) (part of amount liable to provide)
                    </label>
                  </div>
                  <div className='w-[25%]'>
                    <input
                      type='text'
                      name='house-rent'
                      id='house-rent'
                      placeholder='0'
                      className='w-[100%] border-solid border-2 border-black  px-2 py-1 text-[14px] outline-none'
                      value={houseRent}
                      onChange={e => setHouseRent(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label htmlFor='TDS' className='text-[14px] py-2'>
                      6.) Tax Deducted at Source by the previous employer at TCS
                    </label>
                  </div>
                  <div className='w-[25%]'>
                    <input
                      type='text'
                      name='TDS'
                      id='TDS'
                      placeholder='0'
                      className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                      value={tds}
                      onChange={e => setTds(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label
                      htmlFor='health-insurance'
                      className='text-[14px] py-2'
                    >
                      7.) Health insurance policy - Premium (RS 25,000)
                    </label>
                  </div>
                  <div className='w-[25%]'>
                    <input
                      type='text'
                      name='health-insurance'
                      id='health-insurance'
                      placeholder='0'
                      className='w-[100%]  border-solid border-2 border-black px-2 py-1 text-[14px] outline-none'
                      value={healthInsurance}
                      onChange={e => setHealthInsurance(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
                <div className='flex items-center  py-2 ml-2'>
                  <div className='w-[70%] py-1'>
                    <label htmlFor='health' className='text-[14px] py-2'>
                      8.)Preventive Health check-up for Self & Family (80D)
                      (Limit 5k)
                    </label>
                  </div>
                  <div className='w-[25%] py-1'>
                    <input
                      type='text'
                      name='health'
                      id='health'
                      placeholder='0'
                      className='w-[100%]  border-solid border-2 border-black px-2  text-[14px] outline-none'
                      value={preventiveHealthCheckup}
                      onChange={e => setPreventiveHealthCheckup(e.target.value)}
                      disabled={!editable}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className='mt-4'>
              <div className='text-[1.4rem] font-medium text-left py-2 mt-2'>
                <h1>Reimbursement Component</h1>
              </div>
              <div className='flex  py-4 border-2 border-solid border-black'>
                <div className='w-[70%]'>
                  <label htmlFor='LTA' className='leading-7 text-sm p-2'>
                    LTA (Do you want LTA as a Reimbursement)
                  </label>
                </div>
                <div className='flex justify-center items-center'>
                  <input
                    type='checkbox'
                    name='LTA'
                    id='LTA'
                    className='h-[20px] w-[20px]'
                    checked={ltaChecked}
                    onChange={e => setLtaChecked(e.target.value)}
                    disabled={!editable}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between my-2 '>
              <div className='text-[16px] font-medium  p-4'>
                Staff No :<span className='p-2'> {empId}</span>
              </div>
              <div className='text-[16px] font-medium  p-4'>
                Name of the Staff :<span className='p-2'> {name}</span>
              </div>
              <div className='text-[16px] font-medium  p-4'>
                PAN No :<span className='p-2'> {panNo}</span>
              </div>

              <div className='text-[16px] font-medium  p-4'>
                Address :<span className='p-2'> {address}</span>
              </div>
            </div>
            <div className='flex justify-evenly gap-5 py-2 mb-20'>
              <Link to={'/admin/submissions'}>
                <button className='w-[100%] h-[45px] text-[16px] font-medium  flex justify-center items-center  p-4  rounded bg-green-400 cursor-pointer '>
                  Back To Submissions
                </button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default ViewTaxSubmission
