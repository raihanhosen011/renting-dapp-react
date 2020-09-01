/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RentalAgreementInterface extends ethers.utils.Interface {
  functions: {
    "amt()": FunctionFragment;
    "cancelRent()": FunctionFragment;
    "cancellationFee()": FunctionFragment;
    "check()": FunctionFragment;
    "confirmAgreement()": FunctionFragment;
    "createdTimestamp()": FunctionFragment;
    "finalCheck()": FunctionFragment;
    "finalCheckByLessee(bool)": FunctionFragment;
    "finalCheckByLessor(bool)": FunctionFragment;
    "getContractAddress()": FunctionFragment;
    "getContractCreated()": FunctionFragment;
    "getItem()": FunctionFragment;
    "getLessee()": FunctionFragment;
    "getLessor()": FunctionFragment;
    "getPaidRents()": FunctionFragment;
    "getRent()": FunctionFragment;
    "getState()": FunctionFragment;
    "incentive()": FunctionFragment;
    "initialCheck()": FunctionFragment;
    "initialCheckByLessee(bool)": FunctionFragment;
    "initialCheckByLessor(bool)": FunctionFragment;
    "item()": FunctionFragment;
    "lessee()": FunctionFragment;
    "lessor()": FunctionFragment;
    "maxRent()": FunctionFragment;
    "paidrents(uint256)": FunctionFragment;
    "payRent()": FunctionFragment;
    "payingRent()": FunctionFragment;
    "possibleRents(uint256)": FunctionFragment;
    "productManager()": FunctionFragment;
    "security()": FunctionFragment;
    "state()": FunctionFragment;
    "terminateNormally()": FunctionFragment;
    "terminateWithAdditionalCharges(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "amt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelRent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancellationFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "check", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "confirmAgreement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createdTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalCheckByLessee",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "finalCheckByLessor",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractCreated",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getItem", values?: undefined): string;
  encodeFunctionData(functionFragment: "getLessee", values?: undefined): string;
  encodeFunctionData(functionFragment: "getLessor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPaidRents",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getRent", values?: undefined): string;
  encodeFunctionData(functionFragment: "getState", values?: undefined): string;
  encodeFunctionData(functionFragment: "incentive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialCheckByLessee",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "initialCheckByLessor",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "item", values?: undefined): string;
  encodeFunctionData(functionFragment: "lessee", values?: undefined): string;
  encodeFunctionData(functionFragment: "lessor", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxRent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paidrents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "payRent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payingRent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "possibleRents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "productManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "security", values?: undefined): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "terminateNormally",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "terminateWithAdditionalCharges",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "amt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelRent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancellationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "check", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "confirmAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createdTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalCheck", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalCheckByLessee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalCheckByLessor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getLessee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getLessor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPaidRents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "incentive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialCheckByLessee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialCheckByLessor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "item", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lessee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lessor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paidrents", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payRent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payingRent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "possibleRents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "security", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "terminateNormally",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateWithAdditionalCharges",
    data: BytesLike
  ): Result;

  events: {
    "agreementConfirmed()": EventFragment;
    "checked(uint8)": EventFragment;
    "contractTerminated()": EventFragment;
    "paidRent()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "agreementConfirmed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "checked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "contractTerminated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "paidRent"): EventFragment;
}

export class RentalAgreement extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RentalAgreementInterface;

  functions: {
    amt(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "amt()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    cancelRent(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "cancelRent()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    cancellationFee(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "cancellationFee()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    check(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "check()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    confirmAgreement(overrides?: Overrides): Promise<ContractTransaction>;

    "confirmAgreement()"(overrides?: Overrides): Promise<ContractTransaction>;

    createdTimestamp(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "createdTimestamp()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    finalCheck(overrides?: Overrides): Promise<ContractTransaction>;

    "finalCheck()"(overrides?: Overrides): Promise<ContractTransaction>;

    finalCheckByLessee(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finalCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    finalCheckByLessor(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finalCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getContractAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getContractAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getContractCreated(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getContractCreated()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getItem(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getItem()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLessee(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLessee()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLessor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLessor()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getPaidRents(
      overrides?: CallOverrides
    ): Promise<{
      0: { id: BigNumber; value: BigNumber; 0: BigNumber; 1: BigNumber }[];
    }>;

    "getPaidRents()"(
      overrides?: CallOverrides
    ): Promise<{
      0: { id: BigNumber; value: BigNumber; 0: BigNumber; 1: BigNumber }[];
    }>;

    getRent(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getRent()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getState(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "getState()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    incentive(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "incentive()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    initialCheck(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "initialCheck()"(
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    initialCheckByLessee(
      _condition: boolean,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "initialCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    initialCheckByLessor(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    item(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "item()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    lessee(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "lessee()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    lessor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "lessor()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    maxRent(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "maxRent()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    paidrents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      value: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "paidrents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      value: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    payRent(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "payRent()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    payingRent(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "payingRent()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    productManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "productManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    security(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "security()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    state(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "state()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    terminateNormally(
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "terminateNormally()"(
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    terminateWithAdditionalCharges(
      additionalCharges: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "terminateWithAdditionalCharges(uint256)"(
      additionalCharges: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  amt(overrides?: CallOverrides): Promise<BigNumber>;

  "amt()"(overrides?: CallOverrides): Promise<BigNumber>;

  cancelRent(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "cancelRent()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  cancellationFee(overrides?: CallOverrides): Promise<BigNumber>;

  "cancellationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  check(overrides?: CallOverrides): Promise<number>;

  "check()"(overrides?: CallOverrides): Promise<number>;

  confirmAgreement(overrides?: Overrides): Promise<ContractTransaction>;

  "confirmAgreement()"(overrides?: Overrides): Promise<ContractTransaction>;

  createdTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "createdTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  finalCheck(overrides?: Overrides): Promise<ContractTransaction>;

  "finalCheck()"(overrides?: Overrides): Promise<ContractTransaction>;

  finalCheckByLessee(
    _condition: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "finalCheckByLessee(bool)"(
    _condition: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  finalCheckByLessor(
    _condition: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "finalCheckByLessor(bool)"(
    _condition: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getContractAddress(overrides?: CallOverrides): Promise<string>;

  "getContractAddress()"(overrides?: CallOverrides): Promise<string>;

  getContractCreated(overrides?: CallOverrides): Promise<BigNumber>;

  "getContractCreated()"(overrides?: CallOverrides): Promise<BigNumber>;

  getItem(overrides?: CallOverrides): Promise<string>;

  "getItem()"(overrides?: CallOverrides): Promise<string>;

  getLessee(overrides?: CallOverrides): Promise<string>;

  "getLessee()"(overrides?: CallOverrides): Promise<string>;

  getLessor(overrides?: CallOverrides): Promise<string>;

  "getLessor()"(overrides?: CallOverrides): Promise<string>;

  getPaidRents(
    overrides?: CallOverrides
  ): Promise<{ id: BigNumber; value: BigNumber; 0: BigNumber; 1: BigNumber }[]>;

  "getPaidRents()"(
    overrides?: CallOverrides
  ): Promise<{ id: BigNumber; value: BigNumber; 0: BigNumber; 1: BigNumber }[]>;

  getRent(overrides?: CallOverrides): Promise<BigNumber>;

  "getRent()"(overrides?: CallOverrides): Promise<BigNumber>;

  getState(overrides?: CallOverrides): Promise<number>;

  "getState()"(overrides?: CallOverrides): Promise<number>;

  incentive(overrides?: CallOverrides): Promise<BigNumber>;

  "incentive()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialCheck(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "initialCheck()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  initialCheckByLessee(
    _condition: boolean,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "initialCheckByLessee(bool)"(
    _condition: boolean,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  initialCheckByLessor(
    _condition: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialCheckByLessor(bool)"(
    _condition: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  item(overrides?: CallOverrides): Promise<string>;

  "item()"(overrides?: CallOverrides): Promise<string>;

  lessee(overrides?: CallOverrides): Promise<string>;

  "lessee()"(overrides?: CallOverrides): Promise<string>;

  lessor(overrides?: CallOverrides): Promise<string>;

  "lessor()"(overrides?: CallOverrides): Promise<string>;

  maxRent(overrides?: CallOverrides): Promise<BigNumber>;

  "maxRent()"(overrides?: CallOverrides): Promise<BigNumber>;

  paidrents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    id: BigNumber;
    value: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "paidrents(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    id: BigNumber;
    value: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  payRent(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "payRent()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  payingRent(overrides?: CallOverrides): Promise<BigNumber>;

  "payingRent()"(overrides?: CallOverrides): Promise<BigNumber>;

  possibleRents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "possibleRents(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  productManager(overrides?: CallOverrides): Promise<string>;

  "productManager()"(overrides?: CallOverrides): Promise<string>;

  security(overrides?: CallOverrides): Promise<BigNumber>;

  "security()"(overrides?: CallOverrides): Promise<BigNumber>;

  state(overrides?: CallOverrides): Promise<number>;

  "state()"(overrides?: CallOverrides): Promise<number>;

  terminateNormally(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "terminateNormally()"(
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  terminateWithAdditionalCharges(
    additionalCharges: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "terminateWithAdditionalCharges(uint256)"(
    additionalCharges: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    amt(overrides?: CallOverrides): Promise<BigNumber>;

    "amt()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelRent(overrides?: CallOverrides): Promise<void>;

    "cancelRent()"(overrides?: CallOverrides): Promise<void>;

    cancellationFee(overrides?: CallOverrides): Promise<BigNumber>;

    "cancellationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    check(overrides?: CallOverrides): Promise<number>;

    "check()"(overrides?: CallOverrides): Promise<number>;

    confirmAgreement(overrides?: CallOverrides): Promise<void>;

    "confirmAgreement()"(overrides?: CallOverrides): Promise<void>;

    createdTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "createdTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    finalCheck(overrides?: CallOverrides): Promise<void>;

    "finalCheck()"(overrides?: CallOverrides): Promise<void>;

    finalCheckByLessee(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "finalCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    finalCheckByLessor(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "finalCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getContractAddress(overrides?: CallOverrides): Promise<string>;

    "getContractAddress()"(overrides?: CallOverrides): Promise<string>;

    getContractCreated(overrides?: CallOverrides): Promise<BigNumber>;

    "getContractCreated()"(overrides?: CallOverrides): Promise<BigNumber>;

    getItem(overrides?: CallOverrides): Promise<string>;

    "getItem()"(overrides?: CallOverrides): Promise<string>;

    getLessee(overrides?: CallOverrides): Promise<string>;

    "getLessee()"(overrides?: CallOverrides): Promise<string>;

    getLessor(overrides?: CallOverrides): Promise<string>;

    "getLessor()"(overrides?: CallOverrides): Promise<string>;

    getPaidRents(
      overrides?: CallOverrides
    ): Promise<
      { id: BigNumber; value: BigNumber; 0: BigNumber; 1: BigNumber }[]
    >;

    "getPaidRents()"(
      overrides?: CallOverrides
    ): Promise<
      { id: BigNumber; value: BigNumber; 0: BigNumber; 1: BigNumber }[]
    >;

    getRent(overrides?: CallOverrides): Promise<BigNumber>;

    "getRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    getState(overrides?: CallOverrides): Promise<number>;

    "getState()"(overrides?: CallOverrides): Promise<number>;

    incentive(overrides?: CallOverrides): Promise<BigNumber>;

    "incentive()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialCheck(overrides?: CallOverrides): Promise<void>;

    "initialCheck()"(overrides?: CallOverrides): Promise<void>;

    initialCheckByLessee(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    initialCheckByLessor(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    item(overrides?: CallOverrides): Promise<string>;

    "item()"(overrides?: CallOverrides): Promise<string>;

    lessee(overrides?: CallOverrides): Promise<string>;

    "lessee()"(overrides?: CallOverrides): Promise<string>;

    lessor(overrides?: CallOverrides): Promise<string>;

    "lessor()"(overrides?: CallOverrides): Promise<string>;

    maxRent(overrides?: CallOverrides): Promise<BigNumber>;

    "maxRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    paidrents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      value: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "paidrents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      value: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    payRent(overrides?: CallOverrides): Promise<void>;

    "payRent()"(overrides?: CallOverrides): Promise<void>;

    payingRent(overrides?: CallOverrides): Promise<BigNumber>;

    "payingRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    productManager(overrides?: CallOverrides): Promise<string>;

    "productManager()"(overrides?: CallOverrides): Promise<string>;

    security(overrides?: CallOverrides): Promise<BigNumber>;

    "security()"(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<number>;

    "state()"(overrides?: CallOverrides): Promise<number>;

    terminateNormally(overrides?: CallOverrides): Promise<void>;

    "terminateNormally()"(overrides?: CallOverrides): Promise<void>;

    terminateWithAdditionalCharges(
      additionalCharges: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "terminateWithAdditionalCharges(uint256)"(
      additionalCharges: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    agreementConfirmed(): EventFilter;

    checked(undefined: null): EventFilter;

    contractTerminated(): EventFilter;

    paidRent(): EventFilter;
  };

  estimateGas: {
    amt(overrides?: CallOverrides): Promise<BigNumber>;

    "amt()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelRent(overrides?: PayableOverrides): Promise<BigNumber>;

    "cancelRent()"(overrides?: PayableOverrides): Promise<BigNumber>;

    cancellationFee(overrides?: CallOverrides): Promise<BigNumber>;

    "cancellationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    check(overrides?: CallOverrides): Promise<BigNumber>;

    "check()"(overrides?: CallOverrides): Promise<BigNumber>;

    confirmAgreement(overrides?: Overrides): Promise<BigNumber>;

    "confirmAgreement()"(overrides?: Overrides): Promise<BigNumber>;

    createdTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "createdTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    finalCheck(overrides?: Overrides): Promise<BigNumber>;

    "finalCheck()"(overrides?: Overrides): Promise<BigNumber>;

    finalCheckByLessee(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "finalCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    finalCheckByLessor(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "finalCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getContractAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    getContractCreated(overrides?: CallOverrides): Promise<BigNumber>;

    "getContractCreated()"(overrides?: CallOverrides): Promise<BigNumber>;

    getItem(overrides?: CallOverrides): Promise<BigNumber>;

    "getItem()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLessee(overrides?: CallOverrides): Promise<BigNumber>;

    "getLessee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLessor(overrides?: CallOverrides): Promise<BigNumber>;

    "getLessor()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPaidRents(overrides?: CallOverrides): Promise<BigNumber>;

    "getPaidRents()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRent(overrides?: CallOverrides): Promise<BigNumber>;

    "getRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    getState(overrides?: CallOverrides): Promise<BigNumber>;

    "getState()"(overrides?: CallOverrides): Promise<BigNumber>;

    incentive(overrides?: CallOverrides): Promise<BigNumber>;

    "incentive()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialCheck(overrides?: PayableOverrides): Promise<BigNumber>;

    "initialCheck()"(overrides?: PayableOverrides): Promise<BigNumber>;

    initialCheckByLessee(
      _condition: boolean,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "initialCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    initialCheckByLessor(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    item(overrides?: CallOverrides): Promise<BigNumber>;

    "item()"(overrides?: CallOverrides): Promise<BigNumber>;

    lessee(overrides?: CallOverrides): Promise<BigNumber>;

    "lessee()"(overrides?: CallOverrides): Promise<BigNumber>;

    lessor(overrides?: CallOverrides): Promise<BigNumber>;

    "lessor()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxRent(overrides?: CallOverrides): Promise<BigNumber>;

    "maxRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    paidrents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "paidrents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payRent(overrides?: PayableOverrides): Promise<BigNumber>;

    "payRent()"(overrides?: PayableOverrides): Promise<BigNumber>;

    payingRent(overrides?: CallOverrides): Promise<BigNumber>;

    "payingRent()"(overrides?: CallOverrides): Promise<BigNumber>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    productManager(overrides?: CallOverrides): Promise<BigNumber>;

    "productManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    security(overrides?: CallOverrides): Promise<BigNumber>;

    "security()"(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    "state()"(overrides?: CallOverrides): Promise<BigNumber>;

    terminateNormally(overrides?: PayableOverrides): Promise<BigNumber>;

    "terminateNormally()"(overrides?: PayableOverrides): Promise<BigNumber>;

    terminateWithAdditionalCharges(
      additionalCharges: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "terminateWithAdditionalCharges(uint256)"(
      additionalCharges: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "amt()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelRent(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "cancelRent()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    cancellationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cancellationFee()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    check(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "check()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    confirmAgreement(overrides?: Overrides): Promise<PopulatedTransaction>;

    "confirmAgreement()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    createdTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "createdTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalCheck(overrides?: Overrides): Promise<PopulatedTransaction>;

    "finalCheck()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    finalCheckByLessee(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finalCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    finalCheckByLessor(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finalCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContractAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContractCreated(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContractCreated()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getItem(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getItem()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLessee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLessee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLessor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLessor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPaidRents(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPaidRents()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getState()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "incentive()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialCheck(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "initialCheck()"(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    initialCheckByLessee(
      _condition: boolean,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "initialCheckByLessee(bool)"(
      _condition: boolean,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    initialCheckByLessor(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialCheckByLessor(bool)"(
      _condition: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    item(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "item()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lessee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lessee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lessor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lessor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxRent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxRent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paidrents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "paidrents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payRent(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "payRent()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    payingRent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "payingRent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    possibleRents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "possibleRents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    productManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "productManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    security(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "security()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "state()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    terminateNormally(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "terminateNormally()"(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    terminateWithAdditionalCharges(
      additionalCharges: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "terminateWithAdditionalCharges(uint256)"(
      additionalCharges: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
