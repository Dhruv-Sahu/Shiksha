import React from 'react'

const SingleTable = ({data}) => {
    const {FirstName,LastName,Donation,Type,Organisation,PublicAddress,TransactionHash} = data
    console.log(data)
     var Linkerhandler=`https://goerli.etherscan.io/tx/${TransactionHash}`
  return (
     <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex">
        
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {FirstName}{" "}{LastName}
          </p>
          <p className="text-gray-600 whitespace-no-wrap text-[10px]">{PublicAddress}</p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">${Donation}</p>
      <p className="text-gray-600 whitespace-no-wrap">{Organisation}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <a href={Linkerhandler} target='_blank' className="text-blue-900 whitespace-no-wrap">Reciept</a>
      <p className="text-gray-600 whitespace-no-wrap"></p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span
        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
      >
        <span
          aria-hidden
          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
        ></span>
        <span className="relative">{Type}</span>
      </span>
    </td>
    <td
      className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
    >
      
    </td>
  </tr>
  )
}

export default SingleTable