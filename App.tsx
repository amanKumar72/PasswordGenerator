import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'

const PassSchema=Yup.object().shape({
  PasswordLength:Yup.number()
  .min(4,'should be min of 4')
  .max(20,'should be max of 20')
  .required('length of password is required')
})
export default function App () {
  const [Password,setPassword]=useState('')
  const [isPassGenrated,setIsPassGenrated]=useState(false)
  const [upperCase,setUpperCase]=useState(false)
  const [lowerCase,setLowerCase]=useState(true)
  const [isNumeric,setIsNumeric]=useState(false)
  const [isSymble,setIsSymbol]=useState(false)

  const generatePassword=(passLength:number)=>{
    var characters=''
    const upper='QWERTYUIOPLKJHGFDSAZXCVBNM'
    const lower='qwertyuioplkjhgfdsazxcvbnm'
    const number='1236547890'
    const symbols='<>:?"|}{/.,\;=-+_)(*&^%$#@!~`'
    
    if(upperCase){
      characters+=upper
    }
    if(lowerCase){
      characters+=lower
    }
    if(isNumeric){
      characters+=number
    }
    if(isSymble){
      characters+=symbols
    }

    const pass=createPassword(characters,passLength)
    setPassword(pass)
    setIsPassGenrated(true)
  }
  const createPassword=(characters:string,passLength:number)=>{
    let result=''
    for(let i=0;i<passLength;i++){
      let characterIndex=Math.round(Math.random()*characters.length)
      result+=characters.charAt(characterIndex)
    }
    return result
  }

  const resetPassword=()=>{
    setPassword('')
    setIsNumeric(false)
    setIsPassGenrated(false)
    setIsSymbol(false)
    setLowerCase(true)
    setUpperCase(false)
  }
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
}

const styles = StyleSheet.create({})
