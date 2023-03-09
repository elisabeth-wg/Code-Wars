// DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty.All input is guaranteed to be valid, i.e.each input string will only ever consist of 'G', 'C', 'A' and / or 'T'.

// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
// }

//P: String that represents the DNA. Could be an empty string. Will be in upper case. 

//R: Return a string with 'T's replaced with 'U's.

//E: ('GTACCAT' --> 'GUACCAU'), ('' --> ''), ('TTGA' --> 'UUGA')

//P: Take in a str parameter. .replaceAll()the 'T' with 'U'.
//*Worked with current code, did not need to write anything additional* make sure to check for empty str situation
//return the new string



const DNAtoRNA = dna => dna.replaceAll('T', 'U')